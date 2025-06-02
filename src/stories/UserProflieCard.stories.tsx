import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileCard } from '../components/UserProfileCard/UserProfileCard'; // Sesuaikan path

const meta: Meta<typeof UserProfileCard> = {
    title: 'Komponen Saya/UserProfileCard',
    component: UserProfileCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        name: { control: 'text' },
        avatarUrl: { control: 'text' },
        bio: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileComplete: Story = {
    args: {
        name: 'Siti Storybook',
        avatarUrl: 'https://placehold.co/500x500',
        bio: 'Pengembang Antarmuka Pengguna yang suka bercerita dengan komponen.',
    },
};

export const ProfileNonImage: Story = {
    args: {
        name: 'Budi Budiman',
        bio: 'Penulis konten teknis.',
    },
};

export const ProfileMin: Story = {
    args: {
        name: 'Ani',
    },
};