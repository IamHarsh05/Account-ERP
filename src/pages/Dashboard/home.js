import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const forms = [
    {
      id: 1,
      name: "Company Registration Form",
      href: "/register",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg",
      imageAlt:
        "Company Registration Form",
    },
    {
      id: 2,
      name: "Director Registration Form",
      href: "/drregister",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg",
      imageAlt:
        "Director Registration Form",
    },
    {
      id: 3,
      name: "Director File Upload",
      href: "/drupload",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt:
        "Director File Upload",
    },
    {
      id: 4,
      name: "Other Documents Upload",
      href: "/other",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt:
        "Other Documents Upload",
    },
    {
      id: 5,
      name: "Company Detail Registration",
      href: "/details",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
      imageAlt:
        "Company Detail Registration",
    },
    {
      id: 6,
      name: "Quotation Form",
      href: "/qutation",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
      imageAlt:
        "Quotation Form",
    },
  ];

  return (
    <div className="bg-white py-16 md:py-0 h-screen">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {forms.map((form) => (
            <Link key={form.id} to={form.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={form.imageSrc}
                  alt={form.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {form.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
