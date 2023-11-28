// Next
import Image from 'next/image';
// Icons
import SearchIcon from '@/icons/search.svg';
import ShopIcon from '@/icons/shop.svg';
import Profile from '@/icons/profile.svg';
import ArrowDown from '@/icons/arrow-down.svg';

export default function Header() {
    const menuItems = [
        {
            label: 'Shop',
            children: ['Men', 'Women']
        },
        {
            label: 'On Sale',
            children: []
        },
        {
            label: 'New Arrivals',
            children: []
        },
        {
            label: 'Brands',
            children: []
        }
    ];

    return (
        <header className="w-100 py-6 px-24">
            <div className="flex gap-10 items-center justify-between">
                <div className="font-bold text-4xl">SHOP.CO</div>

                <ul className="flex gap-6 align-middle">
                    {
                        menuItems.map((item, index) => (
                            <div
                                className="flex gap-1 cursor-pointer"
                                key={index}
                            >
                                <li>
                                    {item.label}
                                    {item.children.length > 0 && (
                                        <ul className="hidden">
                                            {
                                                item.children.map((child, childIndex) => (
                                                    <li key={childIndex}>{child}</li>
                                                ))
                                            }
                                        </ul>
                                    )}
                                </li>
                                {item.children.length > 0 &&
                                    <Image
                                        src={ArrowDown}
                                        alt="arrow icon"
                                    />
                                }
                            </div>
                        ))
                    }
                </ul>

                <div className="bg-gray-100 px-4 py-3 rounded-full flex gap-3 grow">
                    <Image
                        src={SearchIcon}
                        alt="search icon"
                    />

                    <input
                        className="w-full border-none bg-transparent focus:outline-none"
                        type="text"
                        placeholder="Search for products..."
                    />
                </div>

                <div className="flex gap-3.5">
                    <button>
                        <Image
                            src={ShopIcon}
                            alt="shop icon"
                        />
                    </button>

                    <button>
                        <Image
                            src={Profile}
                            alt="profile icon"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}