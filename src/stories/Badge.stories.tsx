import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "../components/Badge/Badge"

const meta: Meta<typeof Badge> = {
    title: "Badge",
    component: Badge,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: { type: "select" },
            options: ["danger", "warning", "success", "default"]
        },
        onClick: {
            action: "click!"
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>

export const Danger: Story = {
    args: {
        color: "danger",
        label: "badge"
    }
}

export const Yellow: Story = {
    args: {
        color: "yellow",
        label: "badge"
    },
};

export const Success: Story = {
    args: {
        color: "success",
        label: "badge"
    },
};

export const Default: Story = {
    args: {
        color: "default",
        label: "badge"
    },
};