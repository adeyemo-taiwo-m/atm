import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Let’s Work Together</h2>
        <p className="mt-4 text-neutral-700">
          Have a project in mind or want to collaborate? I’m always open to
          discussing new ideas or improving existing projects.
        </p>

        <div className="mt-6 space-y-2 text-neutral-700">
          <div>
            <strong>Email:</strong>{" "}
            <a href="mailto:youremail@gmail.com">youremail@gmail.com</a>
          </div>
          <div>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/yourusername
            </a>
          </div>
          <div>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              github.com/yourusername
            </a>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="mailto:youremail@gmail.com"
            className="inline-block px-8 py-3 rounded-md bg-primary text-white"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
