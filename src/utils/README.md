# Observations

## Cookies (Headache!!!!)

- The token is coming in the cookies section under the Applications tab in dev console but the react code is not getting that.
  - There are 4 key value pairs in which the token is generated when the user logs in.
  - But React code doesn't recognise that. It only sees the first 3 pairs that were already present.

## Full reload

Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.
You might have a file which exports a React component but also exports a value that is imported by a non-React component file.
Consider migrating the non-React component export to a separate file and importing it into both files.

It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.
Fast Refresh requires at least one parent function component in your React tree.

## Helpful Things

- Create Sign Up form like this: https://miro.medium.com/v2/resize:fit:1100/format:webp/1*F0YkI6iVAAc-ybxxtDx7QQ.png (Image)
  - Full blog: https://uxplanet.org/10-best-practices-for-creating-sign-up-forms-48470ce94b16
