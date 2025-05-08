import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

// Mock the router
const mockPush = jest.fn();
const mockPathname = '/';
const mockSearchParams = new URLSearchParams();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockPush,
  }),
  usePathname: () => mockPathname,
  useSearchParams: () => mockSearchParams,
}));

describe('LanguageSwitcher', () => {
  const renderWithProvider = () => {
    return render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>,
    );
  };

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    // Reset document.cookie
    document.cookie = '';
  });

  it('should render language buttons', () => {
    renderWithProvider();
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('SV')).toBeInTheDocument();
  });

  it('should switch language when clicking a button', async () => {
    renderWithProvider();

    // Click on SV button
    const svButton = screen.getByText('SV');
    fireEvent.click(svButton);

    // Wait for the state to update
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check if the URL was updated correctly
    expect(mockPush).toHaveBeenCalledWith('/sv', { scroll: false });

    // Check if the cookie was set
    expect(document.cookie).toContain('NEXT_LOCALE=sv');

    // Click on EN button
    const enButton = screen.getByText('EN');
    fireEvent.click(enButton);

    // Wait for the state to update
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check if the URL was updated back to default
    expect(mockPush).toHaveBeenCalledWith('/', { scroll: false });
  });
});
