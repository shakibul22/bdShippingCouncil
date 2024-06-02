import LoadingUI from "@/components/loader/loadingUI";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-screen bg-softWhite flexCenter">
      <LoadingUI />
    </div>
  );
}
