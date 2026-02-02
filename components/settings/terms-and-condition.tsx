"use client";

import { useEffect, useState } from "react";
import DashboardLoader from "../dashboard/loader/dashboardLoader";
import TextEditor from "../resuable/text-editor";
import { Button } from "../ui/button";

const TermsAndCondition = () => {
  const [content, setContent] = useState<string>("");

  // GET with proper loading/error states
  // const { data: getTermsInfo, isLoading } =
  //   useGetDashboardSettingApiQuery("terms");
  // const termsData = getTermsInfo?.data;
  // const initialContent = termsData?.value || "";

  // const [addDashboardSettingApi] = useAddDashboardSettingApiMutation();

  // useEffect(() => {
  //   if (initialContent) {
  //     setContent(initialContent);
  //   }
  // }, [initialContent]);

  const handleUpdate = async () => {
    // const formData = new FormData();
    // formData.append("key", "terms");
    // formData.append("value", content);
    // try {
    //   const res = await addDashboardSettingApi(formData).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //   }
    // } catch (error: any) {
    //   console.log("Update error:", error);
    //   toast.error(error?.data?.message || "Update failed");
    // }
  };

  // if (isLoading) {
  //   return <DashboardLoader />;
  // }

  return (
    <div>
      <div className="mt-4">
        <TextEditor
          value={content}
          onChange={setContent}
          className=" p-2 control"
          // img={false}
        />
        <div className="mt-6">
          <Button
            style={{
              background:
                "linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%)",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              fontSize: "20px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={handleUpdate}
            className="w-full h-11"
          >
            Update
          </Button>
        </div>
      </div>

      {/* Preview section with HTML rendering */}
      <div className="mt-10">
        <h1 className="font-semibold mb-2">Preview update content:</h1>
        <div className=" min-h-[200px]">
          {content ? (
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="prose max-w-none"
            />
          ) : (
            <p className="text-gray-500">No content to preview</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
