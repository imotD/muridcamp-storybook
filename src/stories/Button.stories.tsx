import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button"

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"]
        },
        onClick: {
            action: "click!"
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        primary: true,
        label: "Primary"
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary',
    },
};

export const Large: Story = {
    args: {
        label: "Large",
        size: "large"
    },
};