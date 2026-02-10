
import SubTitle from "../shared/title/title";
import Image from "next/image";
import photo1 from "@/public/right.png";

const BuiltEvents = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${photo1.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 pt-40">
          <SubTitle text="Built for every event" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-20">
            <div className="bg-secondary/40 p-3 rounded-[20px] flex flex-col md:flex-row items-center gap-3">
              <div>
                <Image
                  src="/buildEvent/build-even01.png"
                  alt="photo"
                  width={400}
                  height={400}
                  className="w-62.5 h-27.5  object-cover rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-[#121212] md:text-[20px] font-semibold">
                  Weddings
                </h3>
                <p className="text-[#989898] ">
                  Beautifully organized wedding memories, all in one place.
                  Guests simply upload a selfie to discover every photo they
                  appear in.
                </p>
              </div>
            </div>

            <div className="bg-secondary/40 p-3 rounded-[20px] flex flex-col md:flex-row items-center gap-3">
              <div>
                <Image
                  src="/buildEvent/build-even02.png"
                  alt="photo"
                  width={400}
                  height={400}
                  className="w-62.5 h-27.5  object-cover rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-[#121212] md:text-[20px] font-semibold">
                  Sports
                </h3>
                <p className="text-[#989898] ">
                  Athletes and fans can instantly discover their photos with
                  effortless face search. Because every win deserves to be
                  remembered.
                </p>
              </div>
            </div>

            <div className="bg-secondary/40 p-3 rounded-[20px] flex flex-col md:flex-row items-center gap-3">
              <div>
                <Image
                  src="/buildEvent/build-even03.png"
                  alt="photo"
                  width={400}
                  height={400}
                  className="w-62.5 h-27.5  object-cover rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-[#121212] md:text-[20px] font-semibold">
                  School & Colleges
                </h3>
                <p className="text-[#989898] ">
                  From classroom milestones to graduation day every memory,
                  beautifully preserved. Students simply upload a selfie to find
                  their photos with ease.
                </p>
              </div>
            </div>

            <div className="bg-secondary/40 p-3 rounded-[20px] flex flex-col md:flex-row items-center gap-3">
              <div>
                <Image
                  src="/buildEvent/build-even04.png"
                  alt="photo"
                  width={400}
                  height={400}
                  className="w-62.5 h-27.5  object-cover rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-[#121212] md:text-[20px] font-semibold">
                  Corporate Events
                </h3>
                <p className="text-[#989898] ">
                  Designed for conferences, launches, and team experiences.
                  Seamless photo discovery for attendees, with full branding
                  control for organizers.
                </p>
              </div>
            </div>

            <div className="bg-secondary/40 p-3 rounded-[20px] flex flex-col md:flex-row items-center gap-3">
              <div>
                <Image
                  src="/buildEvent/build-even05.png"
                  alt="photo"
                  width={400}
                  height={400}
                  className="w-62.5 h-27.5  object-cover rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-[#121212] md:text-[20px] font-semibold">
                  Social Clubs
                </h3>
                <p className="text-[#989898] ">
                  Capture the spirit of every gathering and celebration. Members
                  can easily find and relive their favorite moments.
                </p>
              </div>
            </div>

            <div className="bg-secondary/40 p-3 rounded-[20px] flex flex-col md:flex-row items-center gap-3">
              <div>
                <Image
                  src="/buildEvent/build-even06.png"
                  alt="photo"
                  width={400}
                  height={400}
                  className="w-62.5 h-27.5  object-cover rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-[#121212] md:text-[20px] font-semibold">
                  Convocation
                </h3>
                <p className="text-[#989898] ">
                  Celebrate achievement with a gallery worthy of the moment.
                  Graduates and families can instantly access every captured
                  memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuiltEvents;
