// data/projects.ts

export const projects = [
  {
    id: 1,
    title: "localsafe.eth",
    description:
      "A 100% local web interface for managing multisignature wallets inspired by SafeWallet and EternalSafeWallet. No worrying about the SafeAPI being compromised... Run an instance yourself!",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Wagmi",
      "Viem",
      "SafeWallet SDK",
    ],
    imagePlaceholder: "/images/projects/localsafe.png",
    liveLink: "https://localsafe-eth.vercel.app/",
    githubLink: "https://github.com/s3bc40/localsafe.eth",
  },
  {
    id: 2,
    title: "ETHOnline ROSCA DApp",
    description:
      "Hackathon project around Rosca (Rotating Savings and Credit Association) built with Turborepo, Next.js and Foundry. To avoid trust issues, we use a multisig wallet for the organizer role, SafeWallet for the multisig wallet.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Foundry",
      "Wagmi",
      "Viem",
      "SafeWallet SDK",
    ],
    imagePlaceholder: "/images/projects/rosca.png",
    liveLink: "https://eth-online-2025-rosca-web.vercel.app/",
    githubLink: "https://github.com/s3bc40/eth-online-2025-rosca",
  },
  {
    id: 3,
    title: "Moccasin",
    description:
      "A fast, pythonic, Vyper smart contract testing and development framework. Pythonic start to finish, built on top of Vyper's titanoboa with a focus on developer experience. Active contributor.",
    tech: ["Python", "Vyper", "Titanoboa", "uv", "pytest", "argparse"],
    imagePlaceholder: "/images/projects/mox_banner.png",
    liveLink: "https://cyfrin.github.io/moccasin/",
    githubLink: "https://github.com/s3bc40/moccasin",
  },
  {
    id: 4,
    title: "txdecode",
    description:
      "A blazingly fast EVM transaction decoder CLI built in Rust, powered exclusively by Alloy. Decode any Ethereum transaction or raw calldata into human-readable function calls and parameters — no more squinting at hex blobs.",
    tech: ["Rust", "alloy.rs", "clap", "serde", "serde_json", "tokio"],
    imagePlaceholder: "/images/projects/txdecode.png",
    liveLink: "https://crates.io/crates/txdecode",
    githubLink: "https://github.com/s3bc40/txdecode",
  },
];
