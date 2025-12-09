"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
} from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface UsersContextType {
  users: User[] | undefined;
  isLoading: boolean;
  error: Error | null;
  handlePageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

type FetchUsersResponse = {
  totalPages: number;
  users: User[];
};

const limit = 5;

const fetchUsers = async (
  page: number,
  limit: number
): Promise<FetchUsersResponse> => {
  const { data, headers } = await axios.get<User[]>(
    `https://jsonplaceholder.typicode.com/users`,
    {
      params: {
        _page: page,
        _limit: limit,
      },
    }
  );

  const totalPages = Math.ceil(headers["x-total-count"] / limit);

  return {
    totalPages,
    users: data,
  };
};

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery<FetchUsersResponse, Error>({
    queryKey: ["users", `page-${page}-limit-${limit}`],
    queryFn: () => fetchUsers(page, limit),
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const { totalPages, users } = useMemo(() => {
    return {
      totalPages: data?.totalPages || 0,
      users: data?.users || [],
    };
  }, [data]);

  return (
    <UsersContext.Provider
      value={{
        users,
        totalPages,
        isLoading,
        error: error || null,
        handlePageChange,
        currentPage: page,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = (): UsersContextType => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsersContext must be used within a UsersProvider");
  }
  return context;
};
