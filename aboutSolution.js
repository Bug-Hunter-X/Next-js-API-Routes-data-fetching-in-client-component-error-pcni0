```javascript
// pages/aboutSolution.js
export async function getServerSideProps() {
  const data = await fetch('http://localhost:3000/api/data');
  const jsonData = await data.json();

  return {
    props: {
      jsonData,
    },
  };
}

export default function About({ jsonData }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>{jsonData.message}</p>
    </div>
  );
}
```