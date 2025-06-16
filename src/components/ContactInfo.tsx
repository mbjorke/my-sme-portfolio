import React from 'react';

import { FiMapPin, FiPhone } from 'react-icons/fi'; // FiMail is not used
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { siteConfig } from '@/config/siteConfig';

import { Avatar, AvatarImage } from './ui/avatar';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-6 text-2xl font-extrabold text-foreground">Contact Information</h3>
        <p className="mb-6 text-foreground">
          Feel free to reach out through any of these channels. I typically respond within 24 hours.
        </p>

        <Avatar className="w-36 h-36">
          <AvatarImage
            src={siteConfig.teamMembers[1].avatar}
            className="object-cover rounded-full border-4 shadow-lg aspect-square border-primary bg-background"
          />
        </Avatar>

        <div className="space-y-4">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center space-x-3 text-accent-100 hover:text-accent-500"
            aria-label={`Phone number: ${siteConfig.contact.phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})/, '$1 $2 $3 $4')}`}
          >
            <div className="flex justify-center items-center w-10 h-10 rounded-full">
              <FiPhone size={20} aria-hidden="true" />
            </div>
            <span className="font-medium">
              {siteConfig.contact.phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})/, '$1 $2 $3 $4')}
            </span>
          </a>

          <a
            href={`mailto:${siteConfig.contact.social.github}`}
            className="flex items-center space-x-3 text-accent-100 hover:text-accent-500"
            aria-label={`GitHub profile: ${siteConfig.contact.social.github}`}
          >
            <div className="flex justify-center items-center w-10 h-10 rounded-full">
              <SiGithub size={20} aria-hidden="true" />
            </div>
            <span className="font-medium">{siteConfig.contact.social.github}</span>
          </a>

          <a
            href={siteConfig.contact.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-accent-100 hover:text-accent-500"
            aria-label={`LinkedIn profile: ${siteConfig.contact.social.linkedin.replace('https://', '')}`}
          >
            <div className="flex justify-center items-center w-10 h-10 rounded-full">
              <SiLinkedin size={20} aria-hidden="true" />
            </div>
            <span className="font-medium">
              {siteConfig.contact.social.linkedin.replace('https://', '')}
            </span>
          </a>

          <div className="flex items-center space-x-3 text-accent-100 hover:text-accent-500">
            <div className="flex justify-center items-center w-10 h-10 rounded-full">
              <FiMapPin size={20} aria-hidden="true" />
            </div>
            <span className="font-medium">{siteConfig.contact.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
