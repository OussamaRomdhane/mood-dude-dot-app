import Nav from "@/components/nav/Nav";
import Logo from "@/components/logo/Logo";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-x-hidden mt-6 mb-24 z-10 w-full">
      <Logo />
      <Nav />
      <section className="p-8 w-full box-border flex flex-col gap-6">
        <header className="flex-col flex flex-wrap items-start justify-center">
          <h2 className="text-3xl font-bold inline-block">
            Privacy Policy for Mood Dude
          </h2>
          <p>
            <strong>Effective Date:</strong> 05/12/2024
          </p>
        </header>
        <section>
          <h3 className="text-2xl font-bold">Introduction</h3>
          <p>
            Welcome to <strong>Mood Dude</strong>! Protecting your privacy is
            important to us. This privacy policy explains how we handle your
            data when you use our game. Simply put:{" "}
            <strong>we do not collect or store any personal data</strong> from
            our users.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Data Collection</h3>
          <p>We do not collect any data from users. This includes:</p>
          <ul>
            <li>No personal information (e.g., name, email, phone number).</li>
            <li>No device information (e.g., IP address, operating system).</li>
            <li>No usage analytics or behavioral data.</li>
            <li>No financial or payment data.</li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Data Storage and Sharing</h3>
          <p>Since we do not collect data, there is:</p>
          <ul>
            <li>No storage of user data.</li>
            <li>No sharing of user data with third parties.</li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Cookies and Tracking</h3>
          <p>
            <strong>Mood Dude</strong> does not use cookies or any other
            tracking technologies.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Children&apos;s Privacy</h3>
          <p>
            Our game is safe for all ages. Since no data is collected,{" "}
            <strong>Mood Dude</strong> complies with all applicable child
            privacy laws, including COPPA and GDPR.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Changes to This Privacy Policy</h3>
          <p>
            While we currently do not collect or store any data, this privacy
            policy may be updated in the future to reflect changes in our
            practices or for compliance with new legal requirements. Users will
            be notified of any significant changes through updates in the game.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p>
            If you have any questions or concerns about this privacy policy,
            please contact us at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> hi@eiilo.com
            </li>
          </ul>
          <p>
            Thank you for trusting <strong>Mood Dude</strong>! Enjoy the game!
          </p>
        </section>
      </section>
    </main>
  );
}
