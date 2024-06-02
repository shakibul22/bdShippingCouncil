import Footer from "@/components/footer/Footer";
import MemberListLayout from "@/components/member/list/MemberListLayout";
import Navbar from "@/components/navbar/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <MemberListLayout />
      <Footer />
    </div>
  );
};

export default page;
