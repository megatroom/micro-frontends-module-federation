import dynamic from "next/dynamic";

const RemoteApp = dynamic(
  async () => {
    // Sleep, for demo purposes
    await new Promise((res) => setTimeout(res, 1500));
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
    <div>
      <div style={{ border: "2px solid greenyellow", padding: "0 16px" }}>
        <h1>Next.js App Host</h1>
      </div>
      <RemoteApp />
    </div>
  );
}
