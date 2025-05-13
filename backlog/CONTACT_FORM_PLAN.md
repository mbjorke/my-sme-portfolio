# Contact Form & Button Styling Plan

## 1. Button Styling Unification

- Audit all button components across the project.
- Update border radius and styling for consistency (suggested: `rounded-lg` or `rounded-xl`).
- (Optional) Create a reusable Button component if not present.
- **Estimated Time:** 10–20 minutes.

## 2. Contact Form with Supabase (Step-by-Step)

- Add the contact form UI with validation (Name, Email, Message, Honeypot). (10–20 min)
- Create an API route to receive and validate submissions. (10 min)
- Set up a Supabase project (free, quick signup). (5–10 min)
- Integrate Supabase client into the Next.js app. (10 min)
- Save submissions to Supabase in the API route. (10 min)
- Add anti-bot honeypot and feedback messages. (5 min)
- **Total:** 45–60 minutes (can be split into steps).

## 3. Anti-bot Measures

- Honeypot field (hidden input).
- Basic validation on backend.

## 4. Recommended Workflow

1. **Button styling first** (quick win, improves polish).
2. **Contact form UI** (can be static initially).
3. **Supabase integration** (when ready).

---

_This plan is saved for reference in case you need to recover or revisit the approach._
