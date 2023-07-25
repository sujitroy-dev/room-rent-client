import Link from "next/link";

type navigation = {
  title: string;
  path?: string;
};
type Props = {
  navigations: navigation[];
  spacing: string;
};

export default function Breadcrumb({
  navigations = [],
  spacing = "medium",
}: Props) {
  return (
    <nav
      className={`flex ${
        spacing === "small" ? "py-6" : spacing === "medium" ? "py-10" : "py-14"
      }`}
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {navigations.map((navigation: navigation, index: number) => (
          <li key={navigation.title + index}>
            <div className="flex items-center">
              {index > 0 && (
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
              {navigation.path ? (
                <Link
                  href={navigation.path}
                  className="ml-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ml-2"
                >
                  {navigation.title}
                </Link>
              ) : (
                <span className="ml-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                  {navigation.title}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
