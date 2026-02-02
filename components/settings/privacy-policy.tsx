"use client";

import { useEffect, useState } from "react";
import DashboardLoader from "../dashboard/loader/dashboardLoader";
import { Button } from "../ui/button";
import TextEditor from "../resuable/text-editor";



const PrivacyPolicy = ({ content }: { content: string }) => {
  const [editorContent, setEditorContent] = useState(content);

  // const [addDashboardSettingApi, { isLoading }] =
  //   useAddDashboardSettingApiMutation();

  const handleUpdate = async () => {
    // const formData = new FormData();
    // formData.append("key", "privacy");
    // formData.append("value", editorContent);

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
          value={editorContent}
          onChange={setEditorContent}
          className=" p-2 control"
          // img={false}
        />
        <div className="mt-6">
          <Button 
          onClick={handleUpdate} className="w-full h-11"
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
          >
            Update
          </Button>
        </div>
      </div>

      {/* Preview section with HTML rendering */}
      <div className="mt-10">
        <h1 className="font-semibold mb-2">Preview update content:</h1>
        <div className=" min-h-50">
          {editorContent ? (
            <div
              dangerouslySetInnerHTML={{ __html: editorContent }}
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

export default PrivacyPolicy;
