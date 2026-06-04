export default function Announcement() {
  return (
    <section
      className="relative mx-auto w-full lg:px-16 max-w-7xl md:px-12 items-center px-8 py-24"
      aria-label="bundle"
    >
      <div className="bg-dark-1 rounded-3xl overflow-hidden mx-auto">
        <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-4">
          <div className="grid items-end text-center">
            <div>
              <h2 className="w-full mt-4 text-4xl font-semibold tracking-tight text-light-12 font-display lg:text-5xl">
                Introducing the DeSci Fund for Scientific Innovation
              </h2>
              <p className="max-w-2xl mx-auto mt-8 text-light-11 lg:text-xl">
                Scientists sharing their research on DeSci Nodes can now earn
                money for their research by submitting a visual representation of
                their work to Artizen. Get creative and show the world what your
                work is all about!
              </p>
            </div>
            <div className="flex justify-center gap-3 mt-10 flex-col sm:flex-row">
              <a
                className="button-primary"
                href="https://nodes.desci.com"
                target="_blank"
              >
                Share your research
              </a>
              <a
                className="button-secondary"
                href="https://help.artizen.fund/en/articles/8387161-desci-fund-for-scientific-innovation"
                target="_blank"
              >
                Submit your Node
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
