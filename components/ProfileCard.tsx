import React from "react";
import { Flex, Avatar, Heading, Text, Badge } from "@radix-ui/themes";
import { PROFILE_INFO } from "../constants.tsx";
import { MapPin } from "lucide-react";

export const ProfileCard: React.FC = () => {
  return (
    <Flex direction="column" height="100%" justify="between" gap="6">
      <Flex
        direction={{ initial: "column", md: "row" }}
        gap="6"
        align={{ initial: "center", md: "start" }}
      >
        <Avatar
          size="8"
          src={PROFILE_INFO.avatar}
          fallback={PROFILE_INFO.name.charAt(0)}
          radius="large"
        />

        <Flex direction="column" gap="1">
          <Heading size="8" weight="bold" tracking="tight">
            {PROFILE_INFO.name}
          </Heading>
          <Text
            size="2"
            weight="bold"
            color="indigo"
            style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            {PROFILE_INFO.handle}
          </Text>
          <Flex align="center" gap="2" mt="2">
            <MapPin size={14} style={{ color: "var(--slate-10)" }} />
            <Text
              size="1"
              weight="medium"
              color="gray"
              style={{ textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              {PROFILE_INFO.location}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Text size="4" color="gray" mt="2">
        {PROFILE_INFO.bio}
      </Text>

      <Flex gap="2" wrap="wrap" mt="2">
        {["Product Design", "Engineering", "Creative Tech"].map((tag) => (
          <Badge key={tag} size="2" variant="soft" radius="large" color="gray">
            {tag}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};
