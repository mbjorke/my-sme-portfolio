import React from 'react';
import Button from '@/components/ui/Button';

const ButtonShowcasePage = () => {
  return (
    <div className="p-4">
      <h1 className="my-4 text-3xl font-bold text-center">Button Showcase</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Button variant="default" className="w-full">
          Default Button
        </Button>
        <Button variant="destructive" className="w-full">
          Destructive Button
        </Button>
        <Button variant="outline" className="w-full">
          Outline Button
        </Button>
        <Button variant="secondary" className="w-full">
          Secondary Button
        </Button>
      </div>
    </div>
  );
};

export default ButtonShowcasePage;
