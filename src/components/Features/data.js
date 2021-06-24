import image1 from "../../assets/illustration-features-tab-1.png";
import image2 from "../../assets/illustration-features-tab-2.png";
import image3 from "../../assets/illustration-features-tab-3.png";

export const features = [
    {
      image: image1,
      title: `Bookmark in one click`,
      subtitle: ` Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control
         over how you manage your favourite sites.`,
      class1: ["relative", "mt-20", "lg:mt-24"],
      class2: ["left-0", "rounded-r-full"],
      classes: [
        "container",
        "flex",
        " flex-col",
        "lg:flex-row",
        " items-center",
        "justify-center",
        "gap-x-24",
      ],
    },
    {
      image: image2,
      title: `Intelligent search`,
      subtitle: `Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all
            of your bookmarks.`,
      class1: ["relative", "mt-20", "lg:mt-52"],
      class2: ["right-0", "rounded-l-full"],
      classes: [
        "container",
        "flex",
        " flex-col",
        "lg:flex-row-reverse",
        " items-center",
        "justify-center",
        "gap-x-24",
      ],
    },
    {
      image: image3,
      title: `Share your bookmarks`,
      subtitle: ` Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
            click of a button.`,
      class1: ["relative", "mt-20", "lg:mt-52"],
      class2: ["left-0", "rounded-r-full"],
      classes: [
        "container",
        "flex",
        " flex-col",
        "lg:flex-row",
        " items-center",
        "justify-center",
        "gap-x-24",
      ],
    },
]