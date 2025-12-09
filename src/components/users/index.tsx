"use client";

import { useMemo, useState } from "react";
import { useUsersContext } from "@/context/UserContext";
import { useLocale } from "@/context/LocaleContext";
import { Input } from "@/components/ui/input";
import PaginationControls from "./PaginationControls";
import UsersTable from "./UsersTable";
import LanguageSwitcher from "../layout/LanguageSwitcher";
import { H1 } from "../ui/typography";

export default function Users() {
  const { users, isLoading, error, handlePageChange, totalPages, currentPage } =
    useUsersContext();
  const { t } = useLocale();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = useMemo(() => {
    return (
      users?.filter((user) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return (
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
        );
      }) || []
    );
  }, [users, searchQuery]);

  if (isLoading) {
    return (
      <div className="w-full h-full mx-auto flex flex-col gap-4 md:gap-6 p-4 md:p-6">
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">{t.users.loading}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full mx-auto flex flex-col gap-4 md:gap-6 p-4 md:p-6">
        <div className="flex items-center justify-center h-64">
          <p className="text-destructive text-sm md:text-base text-center px-4">
            {t.users.error}{" "}
            {error instanceof Error ? error.message : t.users.unknownError}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full mx-auto flex flex-col gap-4 md:gap-6 p-4 md:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <LanguageSwitcher />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <H1 className="text-xl md:text-2xl">{t.users.title}</H1>
          <div className="w-full sm:w-auto sm:max-w-sm">
            <Input
              type="text"
              placeholder={t.users.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <UsersTable users={filteredUsers} />
        {!searchQuery.trim() && (
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
