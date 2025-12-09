"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLocale } from "@/context/LocaleContext";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface UsersTableProps {
  users: User[];
}

export default function UsersTable({ users }: UsersTableProps) {
  const { t } = useLocale();

  return (
    <div className="rounded-md border overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[50px]">{t.table.id}</TableHead>
              <TableHead className="min-w-[120px]">{t.table.name}</TableHead>
              <TableHead className="min-w-[100px]">
                {t.table.username}
              </TableHead>
              <TableHead className="min-w-[180px]">{t.table.email}</TableHead>
              <TableHead className="min-w-[140px]">{t.table.phone}</TableHead>
              <TableHead className="min-w-[120px]">{t.table.website}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center text-muted-foreground"
                >
                  {t.users.noUsersFound}
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="text-sm">{user.username}</TableCell>
                  <TableCell className="text-sm break-all">
                    {user.email}
                  </TableCell>
                  <TableCell className="text-sm">{user.phone}</TableCell>
                  <TableCell className="text-sm break-all">
                    {user.website}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
