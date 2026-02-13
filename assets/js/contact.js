const EMAIL_API_CONFIG = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY"
};

const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("contact-submit");
const statusElement = document.getElementById("contact-status");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setStatus(message, type) {
  if (!statusElement) {
    return;
  }

  statusElement.textContent = message;
  statusElement.classList.remove("success", "error");
  if (type) {
    statusElement.classList.add(type);
  }
}

function hasEmailApiConfig() {
  return !Object.values(EMAIL_API_CONFIG).some((value) => value.startsWith("YOUR_EMAILJS_"));
}

async function sendEmailWithApi(payload) {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Email API request failed.");
  }
}

if (contactForm && submitButton) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!hasEmailApiConfig()) {
      setStatus("Set your EmailJS keys in assets/js/contact.js before sending messages.", "error");
      return;
    }

    const formData = new FormData(contactForm);
    const website = String(formData.get("website") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (website) {
      setStatus("Could not send message right now. Please try again.", "error");
      return;
    }

    if (!name || !email || !message) {
      setStatus("Please complete all fields.", "error");
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus("Please enter a valid email address.", "error");
      return;
    }

    if (name.length > 80 || email.length > 120 || message.length > 2000) {
      setStatus("One or more fields are too long.", "error");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    setStatus("Sending your message...", "");

    try {
      await sendEmailWithApi({
        service_id: EMAIL_API_CONFIG.serviceId,
        template_id: EMAIL_API_CONFIG.templateId,
        user_id: EMAIL_API_CONFIG.publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          message
        }
      });

      contactForm.reset();
      setStatus("Message sent successfully. We will get back to you soon.", "success");
    } catch (error) {
      setStatus("Could not send message right now. Please try again.", "error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send";
    }
  });
}
