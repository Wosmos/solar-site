import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold">Footer Component Demo</h2>
        <p className="text-muted-foreground mt-2">
          The footer contains company information, quick links, services, and contact details.
        </p>
      </div>
      <Footer />
    </div>
  );
}