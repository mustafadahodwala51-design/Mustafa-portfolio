import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Send, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { SectionWrapper, SectionHeading } from "@/components/shared/Primitives";
import { AuroraBackground } from "@/components/shared/AmbientBackground";
import { CONTACT } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1200),
});
type FormValues = z.infer<typeof schema>;

function Field({
  label, error, children,
}: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-text-tertiary">{label}</span>
      {children}
      <span role="alert" aria-live="polite" className={cn("mt-1 block text-xs text-error min-h-[1em]", !error && "opacity-0")}>
        {error || " "}
      </span>
    </label>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
  try {
    await emailjs.send(
      "service_umik6zq",
      "template_erze9ga",
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      "dBVUQodJSG-eosJKI"
    );

    setSent(true);
    toast.success("Message sent successfully! I'll get back to you soon.");
    reset();

    setTimeout(() => setSent(false), 3000);
  } catch (error) {
    console.error(error);
    toast.error("Failed to send message. Please try again.");
  }
};

  const inputCls =
    "w-full rounded-xl bg-surface border border-border-hairline px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:shadow-[0_0_0_4px_rgba(59,130,246,0.15)] transition-all";

  return (
    <SectionWrapper id="contact">
      <div className="pointer-events-none absolute inset-0 opacity-40"><AuroraBackground intensity={0.5} /></div>
      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title={<>Let&apos;s build something <span className="text-gradient">together.</span></>}
            subtitle="Have an internship, a project idea, or just want to chat about data and AI? My inbox is open."
          />
          <ul className="space-y-3">
  <ContactItem
    icon={Mail}
    label="dahodmustafa53@gmail.com"
    href="mailto:dahodmustafa53@gmail.com"
  />

  <ContactItem
    icon={Linkedin}
    label="Connect on LinkedIn"
    href="https://www.linkedin.com/in/mustafa-dahodwala-876b78366"
    external
  />

  <ContactItem
    icon={Github}
    label="View GitHub Projects"
    href="https://github.com/mustafadahodwala51-design"
    external
  />

  <ContactItem
    icon={MapPin}
    label="Dombivli, Maharashtra, India"
  />
</ul>
        </div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="glass-strong rounded-2xl p-6 md:p-8 space-y-2"
          noValidate
        >
          <Field label="Name" error={errors.name?.message}>
            <input {...register("name")} type="text" placeholder="Your name" className={inputCls} autoComplete="name" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} type="email" placeholder="you@example.com" className={inputCls} autoComplete="email" />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea {...register("message")} rows={5} placeholder="Tell me a bit about the role or project…" className={cn(inputCls, "resize-none")} />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-aurora px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_40px_-8px_rgba(124,58,237,0.6)] hover:shadow-[0_0_60px_-4px_rgba(124,58,237,0.9)] transition-all disabled:opacity-70"
          >
            {sent ? (<><Check size={16} /> Sent</>) : isSubmitting ? (<><Loader2 size={16} className="animate-spin" /> Sending…</>) : (<><Send size={15} /> Send Message</>)}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}

function ContactItem({
  icon: Icon, label, href, external,
}: { icon: any; label: string; href?: string; external?: boolean }) {
  const Cmp: any = href ? "a" : "div";
  const props = href ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {};
  return (
    <li>
      <Cmp {...props} className="group flex items-center gap-3 rounded-xl glass px-4 py-3 transition-all hover:border-border-strong hover:bg-surface-strong">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-strong text-accent-cyan">
          <Icon size={16} />
        </span>
        <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">{label}</span>
      </Cmp>
    </li>
  );
}
