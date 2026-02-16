import daniel from "../images/image-daniel.jpg";
import jeanette from "../images/image-jeanette.jpg";
import jonathan from "../images/image-jonathan.jpg";
import kira from "../images/image-kira.jpg";
import patrick from "../images/image-patrick.jpg";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center p-8">
        <div className="grid grid-col-1 md:grid-cols-4 gap-6">
          <div className="bg-[hsl(263,55%,52%)] p-8 rounded-lg md:col-span-2">
            <div className="flex gap-3">
              <img
                src={daniel}
                alt="user-img.jpg"
                className="w-7 h-7 rounded-full"
              />
              <div className="text-xs">
                <p className="font-semibold">Daniel Clifford</p>
                <p>Verified Graduate</p>
              </div>
            </div>
            <h3 className=" font-semibold my-3">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </h3>
            <p className="font-light text-sm">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </p>
          </div>
          <div className="bg-[hsl(224,10%,45%)] p-8 rounded-lg text-gray-100">
            <div className="flex gap-3">
              <img
                src={jonathan}
                alt="user-img.jpg"
                className="w-7 h-7 rounded-full"
              />
              <div className="text-xs">
                <p className="font-semibold">Jonathan Walters</p>
                <p>Verified Graduate</p>
              </div>
            </div>
            <h3 className=" font-semibold my-3">
              The team was very supportive and kept me motivated
            </h3>
            <p className="font-light text-sm">
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg text-gray-500 md:row-span-2">
            <div className="flex gap-3">
              <img
                src={kira}
                alt="user-img.jpg"
                className="w-7 h-7 rounded-full"
              />
              <div className="text-xs">
                <p className="font-semibold">Kira Whittle</p>
                <p>Verified Graduate</p>
              </div>
            </div>
            <h3 className=" font-semibold my-3">
              Such a life-changing experience. Highly recommended!
            </h3>
            <p className="font-light text-sm">
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg text-gray-500">
            <div className="flex gap-3">
              <img
                src={jeanette}
                alt="user-img.jpg"
                className="w-7 h-7 rounded-full"
              />
              <div className="text-xs">
                <p className="font-semibold">Jeanette Harmon</p>
                <p>Verified Graduate</p>
              </div>
            </div>
            <h3 className=" font-semibold my-3">
              An overall wonderful and rewarding experience
            </h3>
            <p className="font-light text-sm">
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </p>
          </div>
          <div className="bg-[hsl(217,19%,35%)] p-8 rounded-lg text-gray-200 md:col-span-2">
            <div className="flex gap-3">
              <img
                src={patrick}
                alt="user-img.jpg"
                className="w-7 h-7 rounded-full"
              />
              <div className="text-xs">
                <p className="font-semibold">Patrick Abrams</p>
                <p>Verified Graduate</p>
              </div>
            </div>
            <h3 className=" font-semibold my-3">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </h3>
            <p className="font-light text-sm">
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
