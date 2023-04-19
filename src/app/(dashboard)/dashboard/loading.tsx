import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return <Skeleton className="w-[100px] h-[20px] rounded-full" />;
};

export default loading;
