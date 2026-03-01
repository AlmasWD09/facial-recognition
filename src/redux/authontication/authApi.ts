import { baseApi } from "../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerApi: builder.mutation({
            query: (registerInfo) => ({
                url: `/auth/register`,
                method: "POST",
                body: registerInfo
            }),
            invalidatesTags: ['auth'],
        }),
        verifyOtpApi: builder.mutation({
            query: (verifyOtpInfo) => ({
                url: `/auth/otp-verification`,
                method: "POST",
                body: verifyOtpInfo
            }),
            invalidatesTags: ['auth'],
        }),
        loginApi: builder.mutation({
            query: (loginInfo) => ({
                url: `/auth/login`,
                method: "POST",
                body: loginInfo
            }),
            invalidatesTags: ['auth'],
        }),
        forgotPasswordApi: builder.mutation({
            query: (forgotPasswordInfo) => ({
                url: `/auth/forgot-password`,
                method: "POST",
                body: forgotPasswordInfo
            }),
            invalidatesTags: ['auth'],
        }),
        resetPasswordApi: builder.mutation({
            query: (resetPasswordInfo) => ({
                url: `/auth/reset-password`,
                method: "POST",
                body: resetPasswordInfo
            }),
            invalidatesTags: ['auth'],
        }),
        changePasswordApi: builder.mutation({
            query: (changePasswordInfo) => ({
                url: `/change-password`,
                method: "POST",
                body: changePasswordInfo
            }),
            invalidatesTags: ['auth'],
        }),

        // GET PROFILE API
        getProfileApi: builder.query({
            query: () => ({
                url: `/profile`,
                method: "GET",
            }),
            providesTags: ['auth'],
        }),
        // UPDATE SINGLE PROFILE PIC API
        updateSinglePicApi: builder.mutation({
            query: (updateProfileInfo) => ({
                url: `/edit-profile-picture`,
                method: "POST",
                body: updateProfileInfo
            }),
            invalidatesTags: ['auth'],
        }),
        // EDIT PROFILE API
        editProfileApi: builder.mutation({
            query: (editProfileInfo) => ({
                url: `/edit-profile`,
                method: "POST",
                body: editProfileInfo
            }),
            invalidatesTags: ['auth'],
        }),

    }),
    overrideExisting: true
})


export const { useRegisterApiMutation, useVerifyOtpApiMutation, useLoginApiMutation, useForgotPasswordApiMutation, useResetPasswordApiMutation, useChangePasswordApiMutation, useGetProfileApiQuery, useUpdateSinglePicApiMutation, useEditProfileApiMutation } = authApi;
