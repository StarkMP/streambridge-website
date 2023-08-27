import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Stream Bridge - Privacy Policy',
};

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <div className='container py-6 md:py-16 px-6 md:px-8 [&>section>p]:mb-4 md:[&>section>p]:mb-6 [&>section]:mb-6 md:[&>section]:mb-8'>
        <h1 className='font-medium text-2xl md:text-3xl mb-6 md:mb-8'>Privacy Policy</h1>
        <section>
          <p>Last Updated: August 27, 2023</p>
          <p>
            Welcome to the Privacy Policy for Stream Bridge (hereinafter referred to as{' '}
            {'"Stream Bridge"'}, {'"we"'}, {'"us"'}, or {'"our"'}). We understand the importance of
            your privacy, and we are committed to protecting your personal information. This Privacy
            Policy outlines the types of information we collect, how we use it, and the measures we
            take to protect your data.
          </p>
          <p>
            By using Stream Bridge, you acknowledge and agree to the terms and conditions of this
            Privacy Policy. If you do not agree with any part of this Privacy Policy, please do not
            use or install Stream Bridge.
          </p>
        </section>
        <section>
          <h2 className='font-medium text-xl md:text-2xl mb-3 md:mb-5'>
            Information We Do Not Collect
          </h2>
          <h3 className='font-normal text-lg md:text-xl mb-2 md:mb-3'>Personal Information</h3>
          <p>
            We take your privacy seriously and do not collect any personal information. Stream
            Bridge operates without requiring any personal data from you, and we do not store such
            information.
          </p>
        </section>
        <section>
          <h2 className='font-medium text-xl md:text-2xl mb-3 md:mb-5'>Information Security</h2>
          <p>
            We take appropriate measures to protect the limited information we collect from
            unauthorized access, disclosure, alteration, or destruction. We follow industry-standard
            practices to ensure the security of the data we manage.
          </p>
        </section>
        <section>
          <h2 className='font-medium text-xl md:text-2xl mb-3 md:mb-5'>
            Changes to the Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes to this Privacy Policy
            will be posted on this page, and the {'"Last Updated"'} date at the top will be revised
            accordingly. Your continued use of Stream Bridge after any changes to the Privacy Policy
            constitutes your acceptance of the updated policy.
          </p>
        </section>
        <section>
          <h2 className='font-medium text-xl md:text-2xl mb-3 md:mb-5'>Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy, please feel free to
            contact us at{' '}
            <a
              className='text-cyan-500 hover:text-cyan-600 underline'
              href='mailto:streambridge.extension@gmail.com'
            >
              streambridge.extension@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
