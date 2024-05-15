import React from 'react'
import { PhacSignature } from './PhacSignature'
import {
  Theme,
  Box,
  Section,
  Container,
  Tabs,
  Text,
  Flex,
} from '@radix-ui/themes'

import LocaleSwitcher from './LocaleSwitcher.js'
import { Plural, Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'

export default function App() {
  const { i18n } = useLingui()
  return (
    <Flex width="100%" height="100%" direction="column">
      <Flex justify="between">
        <Flex justify="start">
          <PhacSignature language={i18n.locale} />
        </Flex>

        <Flex display="inline" justify="end">
          <LocaleSwitcher />
        </Flex>
      </Flex>

      <Container>
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="account">
              <Trans>Account</Trans>
            </Tabs.Trigger>
            <Tabs.Trigger value="documents">
              <Trans>Documents</Trans>
            </Tabs.Trigger>
            <Tabs.Trigger value="settings">
              <Trans>Settings</Trans>
            </Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="account">
              <Text size="2">
                <Trans>Make changes to your account.</Trans>
              </Text>
            </Tabs.Content>

            <Tabs.Content value="documents">
              <Text size="2">
                <Trans>Access and update your documents.</Trans>
              </Text>
            </Tabs.Content>

            <Tabs.Content value="settings">
              <Text size="2">
                <Trans>Edit your profile or update contact information.</Trans>
              </Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Container>
    </Flex>
  )
}
