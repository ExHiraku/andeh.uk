import { ComingSoon } from "@/components/coming-soon";
import { FooterNav } from "../_components/footer/footer-nav";

const BlogPage = () => {
  return (
    <div className="space-y-16">
      <ComingSoon />
      <FooterNav bgClassName="bg-white/5" />
    </div>
  );
};

export default BlogPage;
