import type { Meta, StoryObj } from "@storybook/react";

import Test from "../components/test/test";

const meta = {
  title: "Test",
  component: Test,
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
