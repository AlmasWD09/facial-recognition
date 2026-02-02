"use client";

import { useGlobalState } from "@/app/hooks";
import { DeleteIcon, EditDBIcon } from "@/app/icon";
import { db_add_faq_sc, db_edit_faq_sc } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import NotFound from "../resuable/notFound";
import Modal from "../resuable/modal";
import Form from "../resuable/from";
import { FromInput } from "../resuable/form-input";
import { FromTextArea } from "../resuable/from-textarea";

interface faqProps {
  id: number;
  question: string;
  answer: string;
}

const intState = {
  isAdd: false,
  isEdit: false,
};

const faqData = [
  {
    "id": 1,
    "question": "What is your return policy?",
    "answer": "We accept returns within 30 days of purchase with the original receipt."
  },
  {
    "id": 2,
    "question": "How can I track my order?",
    "answer": "You can track your order by visiting our website and entering your order number in the tracking section."
  },
  {
    "id": 3,
    "question": "Do you offer international shipping?",
    "answer": "Yes, we ship internationally. Shipping fees may vary depending on the destination."
  },
  {
    "id": 4,
    "question": "Can I change my order after placing it?",
    "answer": "Once an order is placed, it cannot be modified. However, you can cancel it and place a new order."
  },
  {
    "id": 5,
    "question": "How do I contact customer support?",
    "answer": "You can contact customer support through our 'Contact Us' page or by emailing support@example.com."
  },
  {
    "id": 6,
    "question": "What payment methods do you accept?",
    "answer": "We accept credit cards, PayPal, and Apple Pay."
  },

]





export default function Faq() {
  const [faqModal, setFaqModal] = useGlobalState(intState);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [editId, setEditId] = useState<number | null>(null);

  // add question
  const addfrom = useForm({
    resolver: zodResolver(db_add_faq_sc),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  // edit  question
  const editfrom = useForm({
    resolver: zodResolver(db_edit_faq_sc),
    defaultValues: {
      question: "",
      answer: "",
    },
  });
  const { setValue, reset } = editfrom;

  // const { data: getFaq } = useGetFaqApiQuery({ skip: true });
  // const faqData: faqProps[] = getFaq?.data?.data;
  // const singleFaqData = faqData?.find((item) => item.id === editId);

  // useEffect(() => {
  //   if (singleFaqData) {
  //     setValue("question", singleFaqData.question);
  //     setValue("answer", singleFaqData.answer);
  //   }
  // }, [singleFaqData, setValue]);

  // const [addFaqApi] = useAddFaqApiMutation();
  // const [deleteFaqApi] = useDeleteFaqApiMutation();
  // const [updateFaqApi] = useUpdateFaqApiMutation();

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  const StoreSubmit = async (values: FieldValues) => {
    // const formData = new FormData();
    // formData.append("question", values?.question);
    // formData.append("answer", values?.answer);

    // try {
    //   const res = await addFaqApi(formData).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     setFaqModal("isAdd", false);
    //     addfrom.reset();
    //   } else {
    //     toast.error(res?.messages);
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message);
    //   }
    // }
    // storefrom.reset();
  };

  const handleEdit = (id: number) => {
    setEditId(id);
    setFaqModal("isEdit", true);
  };

  const editSubmit = async (values: FieldValues) => {
    // const formData = new FormData();
    // formData.append("question", values?.question);
    // formData.append("answer", values?.answer);
    // formData.append("_method", "PUT");
    

    // try {
    //   const res = await updateFaqApi({
    //     id: editId,
    //     updateFaqInfo: formData,
    //   }).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //     setFaqModal("isEdit", false);
    //     editfrom.reset();
    //   } else {
    //     toast.error(res?.messages);
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message);
    //   }
    // }
  };

  const handleDelete = async (id: number) => {
    // try {
    //   const res = await deleteFaqApi(id).unwrap();
    //   if (res?.status === true) {
    //     toast.success(res?.message);
    //   } else {
    //     toast.error(res?.messages);
    //   }
    // } catch (errors) {
    //   const errorValue = errors as ApiError;
    //   if (errorValue?.data?.message) {
    //     toast.error(errorValue?.data?.message);
    //   }
    // }
  };

  return (
    <div>
      {faqData?.length > 0 ? (
        <div>
          <h1 className="text-xl font-semibold my-2">
            Frequently Asked Questions (FAQ)
          </h1>
          <div className="py-5" ref={containerRef}>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full">
                {faqData?.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="py-2.5 px-5 mb-4 bg-secondary  rounded-sm cursor-pointer w-full">
                      <div
                        className="flex items-center justify-between"
                        onClick={() => toggleAccordion(index)}
                      >
                        <h4 className="text-base font-medium text-[#1B1B1B]">
                          {item.question}
                        </h4>
                        <span>
                          {activeAccordion === index ? (
                            <ChevronUp
                              size={27}
                              className="text-black rounded-full p-1"
                            />
                          ) : (
                            <ChevronDown
                              size={27}
                              className="text-black rounded-full p-1"
                            />
                          )}
                        </span>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          activeAccordion === index ? "max-h-full" : "max-h-0"
                        }`}
                        style={{
                          maxHeight:
                            activeAccordion === index ? "500px" : "0px",
                        }}
                      >
                        <p className="text-sm lg:text-base mt-1">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                    <div className="ml-2 w-32 flex gap-2">
                      <EditDBIcon
                        onClick={() => handleEdit(item?.id)}
                        className="size-11 cursor-pointer"
                      />
                      <DeleteIcon
                        onClick={() => handleDelete(item?.id)}
                        className="size-11 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => setFaqModal("isAdd", true)}
                size="lg"
                className="rounded-md mt-7"
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
                <Plus className="text-white size-5" />
                Add More
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
         <div className="flex justify-end">
              <Button
                onClick={() => setFaqModal("isAdd", true)}
                size="lg"
                className="rounded-md"
              >
                <Plus className="text-white size-5" />
                Add More
              </Button>
            </div>
          <NotFound text="Faq" />
        </>
      )}
      {/* ==============  added question ============= */}
      <Modal
        open={faqModal.isAdd}
        setIsOpen={(v: boolean) => {
          setFaqModal("isAdd", v);
        }}
        title="Add FAQ"
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <Form from={addfrom} onSubmit={StoreSubmit} className="space-y-6 pt-4">
          <FromInput
            label="Question"
            name="question"
            placeholder="Enter your Question"
            className="h-11 bg-secondary rounded-xl"
          />
          <FromTextArea
            label="Answer"
            name="answer"
            placeholder="Enter your Answer"
            className="min-h-44 rounded-xl"
            stylelabel="bg-white"
          />
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
          className="rounded-xl w-full" size="lg">
            Add
          </Button>
        </Form>
      </Modal>

      {/* ============ edit question ============= */}
      <Modal
        open={faqModal.isEdit}
        setIsOpen={(v: boolean) => {
          setFaqModal("isEdit", v);
        }}
        title="Edit FAQ"
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <Form from={editfrom} onSubmit={editSubmit} className="space-y-6 pt-4">
          <FromInput
            label="Question"
            name="question"
            placeholder="Enter your Question"
            className="h-11 rounded-xl bg-secondary"
          />
          <FromTextArea
            label="Answer"
            name="answer"
            placeholder="Enter your Answer"
            className="min-h-44 rounded-xl"
            stylelabel="bg-white"
          />
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
          className="rounded-xl w-full" size="lg">
            Save changes
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
