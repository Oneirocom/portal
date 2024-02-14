import { clerkClient } from '@clerk/nextjs'
import {
  WebhookEvent,
  WebhookEventType,
  UserWebhookEvent,
  SessionWebhookEvent,
  EmailWebhookEvent,
  SMSWebhookEvent,
  OrganizationWebhookEvent,
  OrganizationMembershipWebhookEvent,
  OrganizationInvitationWebhookEvent,
} from '@clerk/nextjs/server'
import { stripeService } from '@magickml/portal-billing'
import { Roles } from '@magickml/portal-config'
import { PortalSubscriptions } from '@magickml/portal-utils-shared'

export class ClerkEventService {
  private useLogs = process.env.CLERK_WEBHOOK_LOGGING === 'true'
  async handleEvent(event: WebhookEvent) {
    const eventType: WebhookEventType = event.type
    switch (eventType) {
      case 'user.created':
        await this.handleUserCreated(event as UserWebhookEvent)
        break
      case 'user.updated':
        await this.handleUserUpdated(event as UserWebhookEvent)
        break
      case 'user.deleted':
        await this.handleUserDeleted(event as UserWebhookEvent)
        break
      case 'session.created':
        await this.handleSessionCreated(event as SessionWebhookEvent)
        break
      case 'session.ended':
        await this.handleSessionEnded(event as SessionWebhookEvent)
        break
      case 'session.removed':
        await this.handleSessionRemoved(event as SessionWebhookEvent)
        break
      case 'session.revoked':
        await this.handleSessionRevoked(event as SessionWebhookEvent)
        break
      case 'email.created':
        await this.handleEmailCreated(event as EmailWebhookEvent)
        break
      case 'organization.created':
        await this.handleOrganizationCreated(event as OrganizationWebhookEvent)
        break
      case 'organization.updated':
        await this.handleOrganizationUpdated(event as OrganizationWebhookEvent)
        break
      case 'organization.deleted':
        await this.handleOrganizationDeleted(event as OrganizationWebhookEvent)
        break
      case 'organizationMembership.created':
        await this.handleOrganizationMembershipCreated(
          event as OrganizationMembershipWebhookEvent
        )
        break
      case 'organizationMembership.updated':
        await this.handleOrganizationMembershipUpdated(
          event as OrganizationMembershipWebhookEvent
        )
        break
      case 'organizationMembership.deleted':
        await this.handleOrganizationMembershipDeleted(
          event as OrganizationMembershipWebhookEvent
        )
        break
      case 'organizationInvitation.created':
        await this.handleOrganizationInvitationCreated(
          event as OrganizationInvitationWebhookEvent
        )
        break
      case 'organizationInvitation.accepted':
        await this.handleOrganizationInvitationUpdated(
          event as OrganizationInvitationWebhookEvent
        )
        break
      case 'organizationInvitation.revoked':
        await this.handleOrganizationInvitationRevoked(
          event as OrganizationInvitationWebhookEvent
        )
        break
      case 'sms.created':
        await this.handleSMSCreated(event as SMSWebhookEvent)
        break
      default:
        this.log('Unhandled event', eventType)
        break
    }
  }

  private log(event: string, content: string | undefined) {
    this.useLogs &&
      console.log(
        `\x1b[35mCLERK: ${event}: ${content || 'Content was undefined.'}\x1b[0m`
      )
  }

  // USER EVENTS
  private async handleUserCreated(event: UserWebhookEvent) {
    if (!event.data.id) {
      this.log('User created', 'No user ID found in payload.')
      return
    }
    this.log('User created', event.data.id)

    const user = await clerkClient.users.getUser(event.data.id)

    const customer = await stripeService.handleNewCustomer(
      user.id,
    )

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        stripeId: customer,
      },
      publicMetadata: {
        role: Roles.USER,
        subscription: PortalSubscriptions.NEOPHYTE,
      },
    })
  }

  private async handleUserUpdated(event: UserWebhookEvent) {
    this.log('User updated', event.data.id)
  }

  private async handleUserDeleted(event: UserWebhookEvent) {
    this.log('User deleted', event.data.id)
  }

  // SESSION EVENTS
  private async handleSessionCreated(event: SessionWebhookEvent) {
    this.log('Session created', event.data.user_id)
  }

  private async handleSessionEnded(event: SessionWebhookEvent) {
    this.log('Session ended', event.data.user_id)
  }

  private async handleSessionRemoved(event: SessionWebhookEvent) {
    this.log('Session removed', event.data.user_id)
  }

  private async handleSessionRevoked(event: SessionWebhookEvent) {
    this.log('Session revoked', event.data.user_id)
  }

  // ORGANIZATION EVENTS
  private async handleOrganizationCreated(event: OrganizationWebhookEvent) {
    this.log('Organization created', event.data.id)
  }

  private async handleOrganizationUpdated(event: OrganizationWebhookEvent) {
    this.log('Organization updated', event.data.id)
  }

  private async handleOrganizationDeleted(event: OrganizationWebhookEvent) {
    this.log('Organization deleted', event.data.id)
  }

  // ORGANIZATION MEMBERSHIP EVENTS
  private async handleOrganizationMembershipCreated(
    event: OrganizationMembershipWebhookEvent
  ) {
    this.log('Organization membership created', event.data.id)
  }

  private async handleOrganizationMembershipUpdated(
    event: OrganizationMembershipWebhookEvent
  ) {
    this.log('Organization membership updated', event.data.id)
  }

  private async handleOrganizationMembershipDeleted(
    event: OrganizationMembershipWebhookEvent
  ) {
    this.log('Organization membership deleted', event.data.id)
  }

  // ORGANIZATION INVITATION EVENTS
  private async handleOrganizationInvitationCreated(
    event: OrganizationInvitationWebhookEvent
  ) {
    this.log('Organization invitation created', event.data.id)
  }

  private async handleOrganizationInvitationUpdated(
    event: OrganizationInvitationWebhookEvent
  ) {
    this.log('Organization invitation updated', event.data.id)
  }

  private async handleOrganizationInvitationRevoked(
    event: OrganizationInvitationWebhookEvent
  ) {
    this.log('Organization invitation revoked', event.data.id)
  }

  // MISC EVENTS
  private async handleEmailCreated(event: EmailWebhookEvent) {
    this.log('Email created', event.data.id)
  }

  private async handleSMSCreated(event: SMSWebhookEvent) {
    this.log('SMS created', event.data.id)
  }
}

export const clerkEventService = new ClerkEventService()
