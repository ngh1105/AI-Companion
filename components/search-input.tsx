"use client"

import { Search } from "lucide-react";
import qs from "query-string";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/use-debounce";

export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const categoryID = searchParams.get("categoryID");
    const name = searchParams.get("name");

    const [value, setValue] = useState(name || "");
    const debouncedValue = useDebounce<string>(value, 500);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const query = {
            name: debouncedValue,
            categoryID: categoryID || null,
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }, [debouncedValue, router, categoryID]);

    return (
        <div className="relative">
            <Search className="absolute left-4 top-3 h-4 w-4 text-muted-foreground" />
            <Input
                onChange={onChange}
                value={value}
                placeholder="Search" className="pl-10 bg-primary/10" />
        </div>
    )
}