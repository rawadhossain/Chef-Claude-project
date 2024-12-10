import { ReactElement } from 'react';
import { Chef } from '../icons/chef';
import '@fontsource/anton-sc';

interface ChefHeaderProps {
    icon: ReactElement;
    title: string;
}

export default function Navbar({ title }: ChefHeaderProps) {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex items-center justify-center gap-2">
                <a href="/" className="flex items-center space-x-2">
                    <div className="h-10 w-10 flex-shrink-0">
                        <Chef />
                    </div>

                    <h1
                        style={{ fontFamily: '"Anton SC", sans-serif' }}
                        className="text-4xl  text-gray-800"
                    >
                        {title}
                    </h1>
                </a>
            </div>
        </header>
    );
}
