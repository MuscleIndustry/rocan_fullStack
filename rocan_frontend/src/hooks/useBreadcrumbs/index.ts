import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { pathToBreadcrumbName } from "./pathToBreadcrumbName";

interface BreadcrumbItem {
  path: string;
  breadcrumbName: string;
}

const useBreadcrumbs = (): BreadcrumbItem[] => {
  const { pathname } = useLocation();

  const breadcrumbs = useMemo(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const pathList = pathSegments.map(
      (_, index, array) => `/${array.slice(0, index + 1).join("/")}`
    );

    return pathList.map((path) => ({
      path,
      breadcrumbName: pathToBreadcrumbName[path] || "不明なページ",
    }));
  }, [pathname]);

  return breadcrumbs;
};

export default useBreadcrumbs;
