export default function Footer() {
  return (
    <footer>
      <div className="items-center px-8 mx-auto gh:py-24 md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
        <div className="border-y py-12">
          <div className="md:grid md:grid-cols-4 md:gap-8">
            <a href="/" className="lg:pr-8 text-black inline-flex gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand-mark.svg" alt="" width={32} height={32} />
              <span className="font-bold font-display">DeSci Labs</span>
            </a>
            <div>
              <h3 className="text-base text-black font-medium tracking-tight">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-1">
                <li>
                  <a
                    href="/terms"
                    target="_blank"
                    className="text-xs text-gray-400 hover:text-black"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    target="_blank"
                    className="text-xs text-gray-400 hover:text-black"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-base text-black font-medium tracking-tight">
                Resources
              </h3>
              <ul role="list" className="mt-4 space-y-1">
                <li>
                  <a
                    href="https://github.com/desci-labs"
                    target="_blank"
                    className="text-xs text-dark-9 hover:text-dark-12"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://codex.desci.com"
                    target="_blank"
                    className="text-xs text-dark-9 hover:text-dark-12"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://status.desci.com/"
                    target="_blank"
                    className="text-xs text-dark-9 hover:text-dark-12"
                  >
                    App Status
                  </a>
                </li>
                <li>
                  <a
                    href="https://descilabs.notion.site/DeSci-Labs-Job-Board-cd8505e62a794c698cceefe670b33371?pvs=4"
                    target="_blank"
                    className="text-xs text-dark-9 hover:text-dark-12"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-base text-black font-medium tracking-tight">
                  Connect
                </h3>
                <ul role="list" className="mt-4 space-y-1">
                  <li>
                    <a
                      href="https://x.com/descilabs"
                      target="_blank"
                      className="text-xs text-gray-400 hover:text-black"
                    >
                      X (Twitter)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/p2DxgbRQYF"
                      target="_blank"
                      className="text-xs text-gray-400 hover:text-black"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@descilabs"
                      target="_blank"
                      className="text-xs text-gray-400 hover:text-black"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      target="_blank"
                      className="text-xs text-gray-400 hover:text-black"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
