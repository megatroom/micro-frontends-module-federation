import dynamic from "next/dynamic";

const RemoteApp = dynamic(
  async () => {
    // Sleep, for demo purposes
    await new Promise((res) => setTimeout(res, 2000));
    // @ts-ignore
    return await import("mf_webpack_01/App");
  },
  {
    ssr: false,
    loading: ({ error }) => {
      if (error) {
        return (
          <div>
            Error: {error.name} - {error.message}
          </div>
        );
      }
      return <div>Loading...</div>;
    },
  }
);

export default function Home() {
  return (
    <div style={{ border: "5px solid blue", height: "100vh", padding: "16px" }}>
      <div style={{ marginBottom: "16px", color: "blue" }}>
        <h1>Next.js App Host</h1>
      </div>
      <RemoteApp />
    </div>
  );
}
