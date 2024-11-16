"use dom";

import "../global.css";

export default function Page(_: { dom?: import("expo/dom").DOMProps }) {
  // Tailwind info page about the pokemon app built with Expo and Tailwind

  return (
    <div className="p-4 space-y-4">
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          About
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          This is a Pokémon application built using modern web technologies to
          demonstrate cross-platform development capabilities.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>Expo Router - Universal React framework</li>
          <li>Tailwind CSS - Utility-first CSS framework</li>
          <li>React Native - Mobile app development</li>
          <li>React Server Actions - Data fetching</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>Browse Pokémon with smooth transitions</li>
          <li>Responsive design that works on all devices</li>
          <li>Truly native UI with iOS navigation</li>
          <li>Fast performance with React Suspense</li>
        </ul>
      </section>
    </div>
  );
}
