import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),

    defineField({
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "backgroundInformation",
      title: "Background Information",
      type: "string",
    }),
    defineField({
      name: "profilePic",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
  ],
});
