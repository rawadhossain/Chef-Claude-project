import { ReactElement } from 'react';
import { Chef } from '../icons/chef';

interface ChefHeaderProps {
    icon: ReactElement;
    title: string;
}

export default function Navbar({ title }: ChefHeaderProps) {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex items-center justify-center space-x-2">
                <div className="h-10 w-10 flex-shrink-0">
                    <Chef />
                </div>

                <h1 className="text-2xl font-semibold text-gray-800">
                    {title}
                </h1>
            </div>
        </header>
    );
}
