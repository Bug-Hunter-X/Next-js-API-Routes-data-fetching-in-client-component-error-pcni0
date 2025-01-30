```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Next.js App</h1>
      <p>This is a test page.</p>
    </div>
  );
}
```

```javascript
// pages/about.js
export default function About() {
  // This is the problematic line
  const data = await fetch('/api/data');
  const jsonData = await data.json();
  return (
    <div>
      <h1>About Page</h1>
      <p>{jsonData.message}</p>
    </div>
  );
}
```