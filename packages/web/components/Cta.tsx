export default function Cta() {
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
                Want to learn more?
              </h2>
              <p className="max-w-2xl mx-auto mt-8 text-light-11 lg:text-xl">
                We are scientists and engineers building tools to make knowledge
                more accessible and verifiable. We envision a scientific record
                without data silos, content drift, paywalls, and proprietary
                analytics.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-10 flex-col w-full max-w-sm mx-auto">
              <div id="mc_embed_signup">
                <form
                  action="https://desci.us10.list-manage.com/subscribe/post?u=7983cc105f4736780a66d1f34&amp;id=75515631c2&amp;f_id=00eacae5f0"
                  target="_blank"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                >
                  <div className="flex flex-col gap-2 items-center sm:flex-row">
                    <div className="mc-field-group w-full">
                      <input
                        placeholder="Enter Email"
                        type="email"
                        name="EMAIL"
                        className="required email rounded-xl w-full"
                        id="mce-EMAIL"
                        required
                      />
                    </div>
                    <div hidden>
                      <input type="hidden" name="tags" value="14160897" />
                    </div>
                    <div
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-5000px" }}
                    >
                      <input
                        type="text"
                        name="b_7983cc105f4736780a66d1f34_75515631c2"
                        tabIndex={-1}
                        defaultValue=""
                      />
                    </div>
                    <div className="clear button-primary">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                        value="Subscribe"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <a
                className="max-w-2xl mx-auto text-light-11 lg:text-m"
                href="https://docs.desci.com"
                target="_blank"
              >
                Or browse our documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
