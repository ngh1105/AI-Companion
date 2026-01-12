import { Categories } from "@/components/categories";
import { SearchInput } from "@/components/search-input";

const categories = [
    { id: "1", name: "Famous People" },
    { id: "2", name: "Movies & TV" },
    { id: "3", name: "Musicians" },
    { id: "4", name: "Games" },
    { id: "5", name: "Animals" },
    { id: "6", name: "Philosophy" },
    { id: "7", name: "Scientists" },
];

const RootPage = () => {
    return (
        <div className="h-full p-4 space-y-2">
            <SearchInput />
            <Categories data={categories} />
        </div>
    )
}
export default RootPage;