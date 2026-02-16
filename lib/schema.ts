import z from "zod";



//  === sign_In ==
export const sign_In = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Invalid email address",
    }),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});



//  === sign up ===
export const register =z.object({
    name: z.string().nonempty("Full Name is required"),
 email: z
    .string()
    .nonempty("Email is required")
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Invalid email address",
    }),
 password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    password_confirmation: z
      .string()
      .nonempty("Confirm Password is required")
      .min(6, "Password must be at least 6 characters long"),
      role : z.string().optional(),
  })
  .refine((value) => value.password === value.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords must be match.",
  });



// verify otp
export const varify_sc = z.object({
  otp: z.string().nonempty("Otp code is required"),
});
// email verify
export const email_verify_sc = z.object({
  verification_code: z.string().nonempty("Otp code is required"),
});
// forgot password
export const forgot_sc = z.object({
 email: z
    .string()
    .nonempty("Email is required")
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Invalid email address",
    }),
});

//=== reset passowrd ====
export const new_Pass = z
  .object({
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    password_confirmation: z
      .string()
      .nonempty("Confirm Password is required")
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((value) => value.password === value.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords must be match.",
  });


//=== profile changes passowrd ====
export const profile_change_Pass = z
  .object({
    current_password: z
      .string()
      .nonempty("Current password is required")
      .min(6, "Current password must be at least 6 characters long"),

    new_password: z
      .string()
      .nonempty("New password is required")
      .min(6, "New password must be at least 6 characters long"),

    confirm_password: z
      .string()
      .nonempty("Confirm password is required")
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    path: ["confirm_password"],
    message: "New password and confirm password must be match",
  });

// ==== profile change  ====
  export const new_addOn = z.object({
  name: z.string().nonempty("Add-on name is required"),
});



export const profile_change = z.object({
  name: z.string().optional(),
});

//  === change_pass ===
export const change_Pass = z
  .object({
    current_password: z.string().nonempty("Current Password is required"),
    new_password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    c_password: z
      .string()
      .nonempty("Confirm Password is required")
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((value) => value.new_password === value.c_password, {
    path: ["c_password"],
    message: "Passwords must be match.",
  });

export const contact_us = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  message: z.string().nonempty("Message is required"),
});

export const booking_screma = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  phone_number: z.string().nonempty("Phone number is required"),
  address: z.string().nonempty("Address is required"),
  message: z.string().optional(),
});
export const account_screma = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  phone_number: z.string().nonempty("Phone number is required"),
  address: z.string().nonempty("Address is required"),
image: z.any()
    .refine((files) => files?.[0] instanceof File, { 
      message: "Image is required",
    }),
});
export const new_addPaymentCard = z.object({
  name: z.string().nonempty("Name is required"),
});
export const new_review = z.object({
  message: z.string().nonempty("Message is required"),
});
export const new_delivery_request = z.object({
  name: z.string().nonempty("Message is required"),
});

export const package_store = z.object({
  title: z.string().nonempty("Title is required"),
  price: z.string().nonempty("Price is required"),
  about: z.string().nonempty("About is required"),
   image: z.any()
    .refine((files) => files?.[0] instanceof File, { 
      message: "Image is required",
    }),
  services: z.array(z.string()).nonempty("Services is required"),
});

export const set_store = z.object({
  title: z.string().nonempty("Title is required"),
  price: z.string().nonempty("Price is required"),
  about: z.string().nonempty("About is required"),
  date: z.iso.date().nonempty("Date is required"),
});


export const custom_quote_req = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  phone_number: z.string().nonempty("Phone number is required"),
  message: z.string().nonempty("Document request message is required"),
});
export const custom_quote_submit = z.object({
  duc: z.string().optional(),
  drc: z.string().optional(),
  residence_country: z.string().optional(),
});

export const billing_sc = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().nonempty("Email is required"),
  phone_number: z.string().nonempty("Phone number is required"),
  address: z.string().nonempty("Document request message is required"),
});


export const order_mn_sc = z.object({
  category_name: z.string().nonempty("Category Name is required"),
  service_name: z.string().nonempty("Service Name is required"),
  question_one: z.string().optional(),
  question_two: z.string().optional(),
  question_three: z.string().optional(), 
  price: z.string().nonempty("Price  is required"),
  delivery_status_message: z.string().nonempty("Delivery message is required"),
});


// creat news == ok ===
export const create_news_sc = z.object({
 image: z
    .any()
    .refine((file) => file instanceof File, { message: "image is required" }),
  title: z.string().nonempty("Title is required"), 
 description: z.string().optional(), 
});

// update news == ok ===
export const update_news_sc = z.object({
  image: z.any().optional(),
  title: z.string().optional(), 
  description: z.string().optional(),
});

export const db_profile_info_sc = z.object({
   profile_pic: z.any().optional(),
 name: z.string().optional(),
  phone_number: z.string().optional(),
  address: z.string().optional(),
});
export const add_categorie_sc = z.object({
 categorie_name: z.string().nonempty("Categorie Name is required"),
});
export const edit_categorie_sc = z.object({
 categorie_name: z.string().optional(),
});
export const add_service_first_step_sc = z.object({
     image: z
    .any()
    .refine((file) => file instanceof File, { message: "image is required" }),
  is_south_african: z.string().nonempty("Client resides is require"), 
   order_type: z.string().min(1, { message: "Order type is required" }), 
 title: z.string().nonempty("Title is required"), 
subtitle: z.string().nonempty("Sub Title is required"),
  price: z.string().nonempty("Price  is required"),
  short_description: z.string().nonempty("Short Description  is required"),
  description: z.string().optional(),
  how_it_works: z.array(z.object({
    hiw_title: z.string().min(1, { message: "How it works title is required" }),
  })).min(1, { message: "At least one 'How it works title is required'" }),
});

export const add_user_action_sc = z.object({
 ban_type: z.string().nonempty("This action is required"), 
 reason: z.string().nonempty("Reason is required"), 
});


export const add_service_first_step_works_title_sc = z.object({
 hiw_title: z.string().nonempty("Works title is required"), 
});
export const edit_service_first_step_sc = z.object({
  image: z.string().optional(),
  is_south_african: z.string().optional(),
  order_type: z.string().optional(),
 title: z.string().optional(), 
subtitle: z.string().optional(),
  price: z.number().optional(),
  short_description: z.string().optional(),
  description: z.string().optional(),
});




//============= second step by service start ===============
export const add_service_second_step_include_sc = z.object({
 service_type: z.string().nonempty("Service Type is required"), 
included_details: z.string().nonempty("Details is required"),
  price: z.string().nonempty("Price  is required"),
});
export const edit_service_second_step_include_sc = z.object({
 service_type: z.string().nonempty("Service Type is required"), 
included_details: z.string().nonempty("Details is required"),
  price: z.string().nonempty("Price  is required"),
});

export const add_service_second_step_processing_time_sc = z.object({
details: z.string().nonempty("Details is required"),
  time: z.string().nonempty("Time  is required"),
});

//============= second step by service end ===============



//============= 3rd step by service start ===============
export const add_service_three_step_delivery_details_sc = z.object({
 delivery_type: z.string().nonempty("Delivery Type is required"), 
details: z.string().nonempty("Details is required"),
  price: z.string().nonempty("Price  is required"),
});

export const add_service_three_step_add_question_sc = z.object({
  type: z.string().optional(),
 name: z.string().optional(), 
 options: z.string().optional(), 
  optionInput: z.string().optional(),
});

export const add_service_three_step_redquire_dc_sc = z.object({
 title: z.string().nonempty("Document title is required"), 
});

//============= 3rd step by service end ===============
export const db_add_faq_sc = z.object({
 question: z.string().nonempty("Question is required"),
 answer: z.string().nonempty("Answer is required"),
});
export const db_edit_faq_sc = z.object({
 question: z.string().optional(),
 answer: z.string().optional(),
});


export const add_custom_quote_sc = z.object({
  message: z.string().nonempty("Message  is required"),
});
export const add_service_quote_sc = z.object({
  message: z.string().nonempty("Message  is required"),
});

export const create_event = z.object({
  event_name: z.string().optional(),
  event_date: z.string().optional(),
  event_location: z.string().optional(),
  // event_name: z.string().nonempty("Event name  is required"),
  // event_date: z.string().nonempty("Event date  is required"),
  // event_location: z.string().nonempty("Event location  is required"),
});