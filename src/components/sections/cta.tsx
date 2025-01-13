import ShinyText from "../ui/shiny-text";
import GetStartedBtn from '../global/get-started-btn';

export const CTA = () => (
  <section id="cta">
    <div className="py-16">
      <div className="relative container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center space-y-4 pb-6 mx-auto">
          <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
          <ShinyText text="Ready to get started?" disabled={false} speed={3} className='custom-class' />
            
          </h2>
          <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
            Start your <span className="theme-gradient">free</span> trial today.
          </h3>
        </div>

          <GetStartedBtn className="pt-4 w-[90%] mx-auto"/>
      </div>
    </div>
  </section>
);
