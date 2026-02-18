"use client";

import {
  Delete_event_ic_Icon,
  EmailIcon,
  Event_logo_Icon,
  Reset_event_ic_Icon,
  Save_event_ic_Icon,
  Setting_Nav_Icon,
} from "@/components/icon";
import photo1 from "@/public/banner-bg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useRef,
  useState,
} from "react";
import BackButton from "@/components/shared/back-button";
import { Switch } from "@/components/ui/switch";
import { Check, LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const emails = [
  "abc123@gmail.com",
  "user123@example.com",
  "hello@creativeoutlook.com",
  "info@innovativeideas.com",
  "support@techsolutions.com",
];

const EventShare = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [eventLink] = useState("http://lldg.l.ab/uskyfirlfte");
  const [copied, setCopied] = useState(false);
  const [editingTagIndex, setEditingTagIndex] = useState<number | null>(null);
  const [editingTagValue, setEditingTagValue] = useState<string>("");
  const [duplicateEmail, setDuplicateEmail] = useState<string | null>(null);

  // ======== tags input =============== //
  const addTag = () => {
    const value = inputValue.trim();
    if (!value) return;
    if (tags.includes(value)) {
      setDuplicateEmail(value);
      setTimeout(() => setDuplicateEmail(null), 1000);
      return;
    }

    setTags([...tags, value]);
    setInputValue("");
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleKeyDown2 = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };
  // ======== tags input =============== //

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  const handleNavigateEventPage = () => {
    router.push("/event-management");
  };

  const hanldeEditPage = (text: string) => {
    if (selectedId && text === "edit") {
      router.push(`/edit-event?editId=${selectedId}`);
    } else if (selectedId && text === "share") {
      router.push(`/event-share`);
    }
  };

  // switch function
  const handleSwitchChange = (checked: boolean) => {
    setSwitchValue(checked);
  };

  // copy link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(eventLink);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // reset otp code
  const handleResetOtp = () => {
    setOtp(Array(6).fill(""));
    inputRefs.current[0]?.focus();
  };

  // edit email get
  const handleCopyEmail = (text: string) => {
    if (!tags.includes(text)) {
      setTags([...tags, text]);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${photo1.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 py-4 ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-5 border-2 border-transparent">
          <div className="flex flex-col md:flex-row items-center gap-2">
            {/* event management */}
            <div className="inline-flex rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-white px-4 py-2 font-medium"
                onClick={() => handleNavigateEventPage()}
              >
                <span className="bg-linear-to-r from-[#FEAC1A] to-[#F84426] bg-clip-text text-transparent">
                  Event management
                </span>
              </button>
            </div>

            {selectedIndexes.length < 2 && (
              <>
                <div className="inline-flex rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
                  <button
                    type="button"
                    onClick={() => hanldeEditPage("edit")}
                    className="cursor-pointer rounded-lg bg-white px-4 py-2 font-medium"
                  >
                    <span className="bg-linear-to-r from-[#FEAC1A] to-[#F84426] bg-clip-text text-transparent">
                      Edit
                    </span>
                  </button>
                </div>
              </>
            )}

            {/* delete */}
            <div className="inline-flex rounded-lg bg-linear-to-r from-[#FEAC1A] to-[#F84426] p-px">
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-white px-4 py-2 font-medium"
                // onClick={() => handleNavigateEventPage()}
              >
                <span className="bg-linear-to-r from-[#FEAC1A] to-[#F84426] bg-clip-text text-transparent">
                  Delete
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  items-center gap-2">
            <button
              onClick={() => router.push("/settings")}
              className="cursor-pointer"
            >
              <span className="">
                <Setting_Nav_Icon />
              </span>
            </button>
          </div>
        </div>

        {/* Gradient Border Card */}
        <div className="border-2 border-transparent">
          <div
            className={`bg-[#fff7f4]/60 shadow rounded-2xl p-2 md:p-4 min-h-[calc(100vh-140px)] `}
          >
            <div className="flex justify-between items-center">
              <div className="">
                <BackButton
                  text="Back"
                  onClick={() => router.back()}
                  className="text-lg px-4 rounded-lg"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={switchValue}
                    onCheckedChange={handleSwitchChange}
                  />
                  <span>{switchValue ? "Private" : "Public"}</span>
                </div>
              </div>
            </div>

            {/* *** */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-3 mt-8">
              {/* Event Link Section */}
              <div className="w-full flex flex-col space-y-2 border border-gray-200 p-4 rounded-xl">
                <div>
                  <div className="font-semibold text-gray-700 ">Event link</div>
                  <div className="flex flex-col md:flex-row items-end md:items-center gap-2">
                    <div className="flex-1 flex items-center gap-2  border border-gray-200 rounded-lg px-3 py-2">
                      <input
                        type="text"
                        value={eventLink}
                        readOnly
                        className="h-6 flex-1 bg-transparent text-sm text-[#299847] outline-none"
                      />
                    </div>
                    <div>
                      <Button
                        onClick={() => handleCopyLink()}
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        {copied && <Check size={16} />}
                        {copied ? "Copied" : "Copy link"}
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-gray-700">Guest Email</div>
                  <div className="flex flex-col">
                    <div className="w-full border p-1 py-2 rounded-md flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-200 px-1 py-0.5 rounded"
                        >
                          {editingTagIndex === index ? (
                            <input
                              type="text"
                              value={editingTagValue}
                              autoFocus
                              onChange={(e) =>
                                setEditingTagValue(e.target.value)
                              }
                              onBlur={() => {
                                const updatedTags = [...tags];
                                updatedTags[index] =
                                  editingTagValue.trim() || tag;
                                setTags(updatedTags);
                                setEditingTagIndex(null);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  const updatedTags = [...tags];
                                  updatedTags[index] =
                                    editingTagValue.trim() || tag;
                                  setTags(updatedTags);
                                  setEditingTagIndex(null);
                                }
                              }}
                              className="text-sm outline-none bg-gray-100 px-1 py-0.5 rounded"
                            />
                          ) : (
                            <>
                              <span
                                className="text-sm"
                                onClick={() => {
                                  setEditingTagIndex(index);
                                  setEditingTagValue(tag);
                                }}
                              >
                                {tag}
                              </span>

                              <button
                                onClick={() => removeTag(tag)}
                                className="ml-2 text-red-500"
                              >
                                ×
                              </button>
                            </>
                          )}
                        </div>
                      ))}

                      <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown2}
                        placeholder={`${tags.length > 0 ? "Add more email.." : "Enter email.."}`}
                        className="flex-1 outline-none px-2"
                      />
                    </div>

                    {/* Duplicate tooltip */}
                    <div className="mt-1 min-h-5">
                      {duplicateEmail && (
                        <span className="text-red-500 text-sm">
                          "{duplicateEmail}" already exists
                        </span>
                      )}
                    </div>

                    <div className=" flex justify-end">
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-fit rounded-sm  text-white h-11"
                      >
                        Send invite
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Section */}
              <div className="w-full border border-gray-200 p-4 rounded-xl">
                <div className="font-semibold text-gray-700 mb-2">Code</div>
                <div className="">
                  {/* Code Display Boxes */}
                  <CardContent>
                    <div className=" flex gap-2 md:gap-10 mb-2">
                      {otp.map((digit, index) => (
                        <Input
                          key={index}
                          id={`otp-input-${index}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          onPaste={handlePaste}
                          ref={(el) => {
                            if (el) inputRefs.current[index] = el;
                          }}
                          className={cn(
                            "w-10 h-10 md:w-22 md:h-16 text-center text-lg font-medium border-gray-300",
                            "",
                            digit && "",
                          )}
                        />
                      ))}
                    </div>
                  </CardContent>

                  {/* Action Buttons */}
                  <div className="flex justify-end mt-4 ">
                    <div>
                      <button
                        onClick={() => handleResetOtp()}
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-fit flex items-center gap-2 font-medium rounded-sm px-20 text-white h-11"
                      >
                        <Reset_event_ic_Icon /> Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* **** */}
            <div className="space-y-0 p-4 bg-[#DEDEDE33] rounded-xl mt-8 overflow-x-auto">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold">Email</h2>
                </div>
                <div className="flex justify-end">
                  <h2 className="font-semibold">Status</h2>
                </div>
              </div>
              {emails.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 "
                >
                  <div className="text-sm text-gray-600 flex-1 min-w-60 pr-4">
                    <span className="">{item}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div>
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        Send again
                      </Button>
                    </div>
                    <div>
                      <Button
                        onClick={() => handleCopyEmail(item)}
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        Edit
                      </Button>
                    </div>
                    <div>
                      <Button
                        style={{
                          background:
                            "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
                          padding: "0px 20px",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          color: "white",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer w-full rounded-sm  text-white h-11"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventShare;
