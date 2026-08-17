import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Select,
  MenuItem,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Send as SendIcon,
  Email as EmailIcon,
  LocationCity as LocationCityIcon,
  EventAvailable as EventAvailableIcon,
} from '@mui/icons-material';
import { EVENT_TYPES, DJ_PROFILE } from '../data/djData';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: EVENT_TYPES[0],
    eventDate: '',
    venue: '',
    guestCount: '',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name or organization.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your contact email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.eventDate) newErrors.eventDate = 'Please select the event date.';
    if (!formData.venue.trim()) newErrors.venue = 'Please specify the venue or city.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateMailtoUri = () => {
    const subject = encodeURIComponent(`[GibranPVD Booking Inquiry] ${formData.eventType} - ${formData.eventDate || 'Date TBD'}`);
    const body = encodeURIComponent(
      `Hi Gibran,\n\n` +
      `I would like to inquire about booking GibranPVD for an event. Here are the details:\n\n` +
      `• Client / Organization: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone || 'N/A'}\n` +
      `• Event Type: ${formData.eventType}\n` +
      `• Event Date: ${formData.eventDate}\n` +
      `• Venue / City: ${formData.venue}\n` +
      `• Estimated Attendance: ${formData.guestCount || 'TBD'}\n\n` +
      `Event Notes & Musical Direction:\n${formData.details || 'None provided.'}\n\n` +
      `Best regards,\n${formData.name}`
    );
    return `mailto:${DJ_PROFILE.bookingEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setSnackbar({
        open: true,
        message: 'Please complete all required fields (Name, Email, Date, Venue).',
        severity: 'error',
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // If EmailJS keys are configured, send directly via EmailJS API
    if (serviceId && templateId && publicKey && serviceId !== 'service_gibranpvd') {
      setIsSubmitting(true);
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            eventType: formData.eventType,
            eventDate: formData.eventDate,
            venue: formData.venue,
            guestCount: formData.guestCount || 'TBD',
            details: formData.details || 'No additional details.',
            to_email: DJ_PROFILE.bookingEmail,
          },
          publicKey
        );

        setSnackbar({
          open: true,
          message: 'Booking inquiry successfully sent! Gibran will follow up shortly.',
          severity: 'success',
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: EVENT_TYPES[0],
          eventDate: '',
          venue: '',
          guestCount: '',
          details: '',
        });
      } catch (err) {
        console.error('EmailJS Send Error:', err);
        // Fallback to mailto if EmailJS dispatch fails
        window.location.href = generateMailtoUri();
        setSnackbar({
          open: true,
          message: `Opening email client to dispatch to ${DJ_PROFILE.bookingEmail}`,
          severity: 'info',
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Default seamless mailto client launch
      window.location.href = generateMailtoUri();
      setSnackbar({
        open: true,
        message: `Booking inquiry ready! Opening your email to dispatch to ${DJ_PROFILE.bookingEmail}`,
        severity: 'success',
      });
    }
  };

  return (
    <Box
      id="booking"
      sx={{
        pt: { xs: 8, sm: 11, md: 14 },
        pb: { xs: 4, sm: 5, md: 6 },
        backgroundColor: '#0B0B0B',
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 }, width: '100%', maxWidth: '100%', boxSizing: 'border-box', mx: 'auto' }}>
        
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 3.5, sm: 5, md: 7 },
            maxWidth: { xs: '100%', md: 950, lg: 1100 },
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.8,
              py: 0.7,
              px: 1.8,
              mb: 1.8,
              borderRadius: '50px',
              backgroundColor: 'rgba(255, 199, 0, 0.08)',
              border: '1px solid rgba(255, 199, 0, 0.35)',
              boxSizing: 'border-box',
              maxWidth: '100%',
            }}
          >
            <EventAvailableIcon sx={{ color: '#FFC700', fontSize: 16, display: 'block' }} />
            <Typography
              sx={{
                color: '#FFC700',
                fontWeight: 800,
                fontSize: { xs: '0.66rem', sm: '0.74rem' },
                letterSpacing: '0.06em',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              DIRECT EVENT BOOKING & INQUIRIES
            </Typography>
          </Box>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.65rem', sm: '2.1rem', md: '2.6rem', lg: '3.1rem' },
              fontWeight: 900,
              letterSpacing: { xs: '-0.01em', md: '-0.02em' },
              lineHeight: 1.15,
              mb: 1.5,
              textAlign: 'center',
              width: '100%',
              maxWidth: '100%',
              mx: 'auto',
              display: 'block',
              whiteSpace: { xs: 'normal', md: 'nowrap' },
              color: '#FDFBF0',
            }}
          >
            LOCK IN <span style={{ color: '#FFC700' }}>GIBRANPVD</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(253, 251, 240, 0.75)',
              fontSize: { xs: '0.88rem', sm: '1rem', md: '1.05rem' },
              lineHeight: 1.6,
              maxWidth: 720,
              width: '100%',
              mx: 'auto',
              textAlign: 'center',
              display: 'block',
              px: { xs: 0.5, sm: 0 },
              boxSizing: 'border-box',
            }}
          >
            <span style={{ color: '#FFC700', fontWeight: 800 }}>“Entertainment for everyone. Good people deserve good music.”</span> Handling 17+ to 24+ monthly events from luxury weddings and Sweet 15s/16s to nightclub residencies, university concert series, and civic events for the Providence Mayor’s Office.
          </Typography>
        </Box>

        {/* Direct Contact Cards Row */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: { xs: 1.2, sm: 2.5 },
            mb: { xs: 3, sm: 5 },
            maxWidth: 880,
            mx: 'auto',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* Email */}
          <Paper
            sx={{
              p: { xs: 1.8, sm: 2.5 },
              backgroundColor: '#141414',
              border: '1px solid rgba(255, 199, 0, 0.3)',
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              width: '100%',
              maxWidth: '100%',
              minWidth: 0,
              boxSizing: 'border-box',
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 199, 0, 0.12)',
                color: '#FFC700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <EmailIcon fontSize="small" />
            </Box>
            <Box sx={{ minWidth: 0, width: '100%' }}>
              <Typography variant="caption" sx={{ color: 'rgba(253, 251, 240, 0.5)', fontWeight: 700, textTransform: 'uppercase', display: 'block', fontSize: '0.62rem' }}>
                DIRECT BOOKING EMAIL
              </Typography>
              <Typography
                component="a"
                href={`mailto:${DJ_PROFILE.bookingEmail}`}
                sx={{
                  color: '#FDFBF0',
                  fontWeight: 800,
                  textDecoration: 'none',
                  fontSize: { xs: '0.82rem', sm: '0.95rem' },
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '100%',
                  '&:hover': { color: '#FFC700' },
                }}
              >
                {DJ_PROFILE.bookingEmail}
              </Typography>
            </Box>
          </Paper>

          {/* Direct Artist Booking */}
          <Paper
            sx={{
              p: { xs: 1.8, sm: 2.5 },
              backgroundColor: '#141414',
              border: '1px solid rgba(253, 251, 240, 0.12)',
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              width: '100%',
              maxWidth: '100%',
              minWidth: 0,
              boxSizing: 'border-box',
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 199, 0, 0.1)',
                color: '#FFC700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <EventAvailableIcon fontSize="small" />
            </Box>
            <Box sx={{ minWidth: 0, width: '100%' }}>
              <Typography variant="caption" sx={{ color: 'rgba(253, 251, 240, 0.5)', fontWeight: 700, textTransform: 'uppercase', display: 'block', fontSize: '0.62rem' }}>
                DIRECT ARTIST BOOKING
              </Typography>
              <Typography variant="body2" sx={{ color: '#FDFBF0', fontWeight: 800, fontSize: { xs: '0.82rem', sm: '0.95rem' }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                24–48h Response Time
              </Typography>
            </Box>
          </Paper>

          {/* Base */}
          <Paper
            component="a"
            href="https://www.google.com/maps/search/?api=1&query=Providence+Rhode+Island"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              p: { xs: 1.8, sm: 2.5 },
              backgroundColor: '#141414',
              border: '1px solid rgba(253, 251, 240, 0.12)',
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              width: '100%',
              maxWidth: '100%',
              minWidth: 0,
              boxSizing: 'border-box',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: '#FFC700',
                transform: 'translateY(-2px)',
                '& .base-text': {
                  color: '#FFC700',
                  textDecoration: 'underline',
                },
              },
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: 2,
                backgroundColor: 'rgba(253, 251, 240, 0.08)',
                color: '#EDE7CB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <LocationCityIcon fontSize="small" />
            </Box>
            <Box sx={{ minWidth: 0, width: '100%' }}>
              <Typography variant="caption" sx={{ color: 'rgba(253, 251, 240, 0.5)', fontWeight: 700, textTransform: 'uppercase', display: 'block', fontSize: '0.62rem' }}>
                HOME BASE
              </Typography>
              <Typography className="base-text" variant="body2" sx={{ color: '#FDFBF0', fontWeight: 800, fontSize: { xs: '0.82rem', sm: '0.95rem' }, transition: 'color 0.2s', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Providence, Rhode Island
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Structured Booking Form Card */}
        <Paper
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            maxWidth: 880,
            width: '100%',
            mx: 'auto',
            p: { xs: 2, sm: 4, md: 5 },
            backgroundColor: '#141414',
            border: '1px solid rgba(255, 199, 0, 0.3)',
            borderRadius: { xs: 3, sm: 4 },
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
            position: 'relative',
            overflow: 'hidden',
            boxSizing: 'border-box',
          }}
        >
          {/* Subtle Ambient Glow */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 250,
              height: 250,
              background: 'radial-gradient(circle, rgba(255, 199, 0, 0.08) 0%, rgba(0,0,0,0) 70%)',
              pointerEvents: 'none',
            }}
          />

          <Box sx={{ mb: { xs: 2.5, sm: 3.5 }, width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: '#FDFBF0', mb: 0.5, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
              Event Inquiry & Booking Request
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(253, 251, 240, 0.75)', fontSize: '0.85rem', mb: 2 }}>
              Planning makes perfection. Attention to detail, itemized timelines, and custom sound engineering dispatched directly to Gibran.
            </Typography>

            {/* Pro Rig & Scope Badges */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
              {['PIONEER DDJ-SRT1000 RIG', 'ELECTRO-VOICE (EV) ACTIVE PA', 'EV 12" POWERED SUB', 'CHAUVET GIGBAR MOVING HEADS', 'REAL-TIME STEMS ISOLATION'].map((badge) => (
                <Box
                  key={badge}
                  sx={{
                    py: 0.4,
                    px: 1.2,
                    borderRadius: '50px',
                    backgroundColor: 'rgba(255, 199, 0, 0.08)',
                    border: '1px solid rgba(255, 199, 0, 0.25)',
                    fontSize: { xs: '0.62rem', sm: '0.66rem' },
                    fontWeight: 800,
                    color: '#FFC700',
                    letterSpacing: '0.04em',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  {badge}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Form Fields Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: { xs: 2, sm: 2.8 },
              mb: 2.8,
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
            }}
          >
            {/* Name */}
            <Box sx={{ width: '100%', minWidth: 0, maxWidth: '100%', boxSizing: 'border-box' }}>
              <Typography
                component="label"
                sx={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#EDE7CB',
                  mb: 0.6,
                }}
              >
                Your Name / Organization <span style={{ color: '#FFC700' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                value={formData.name}
                onChange={handleChange('name')}
                error={Boolean(errors.name)}
                helperText={errors.name}
                placeholder="e.g. Sarah Jenkins / The Grand Lounge"
                sx={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
              />
            </Box>

            {/* Email */}
            <Box sx={{ width: '100%', minWidth: 0, maxWidth: '100%', boxSizing: 'border-box' }}>
              <Typography
                component="label"
                sx={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#EDE7CB',
                  mb: 0.6,
                }}
              >
                Email Address <span style={{ color: '#FFC700' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                error={Boolean(errors.email)}
                helperText={errors.email}
                placeholder="sarah@example.com"
                sx={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
              />
            </Box>

            {/* Phone */}
            <Box sx={{ width: '100%', minWidth: 0, maxWidth: '100%', boxSizing: 'border-box' }}>
              <Typography
                component="label"
                sx={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#EDE7CB',
                  mb: 0.6,
                }}
              >
                Phone Number <span style={{ color: 'rgba(253, 251, 240, 0.5)', fontWeight: 600 }}>(Optional)</span>
              </Typography>
              <TextField
                fullWidth
                type="tel"
                value={formData.phone}
                onChange={handleChange('phone')}
                placeholder="(401) 555-0199"
                sx={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
              />
            </Box>

            {/* Event Type Select */}
            <Box sx={{ width: '100%', minWidth: 0, maxWidth: '100%', boxSizing: 'border-box' }}>
              <Typography
                component="label"
                sx={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#EDE7CB',
                  mb: 0.6,
                }}
              >
                Event Type <span style={{ color: '#FFC700' }}>*</span>
              </Typography>
              <Select
                fullWidth
                value={formData.eventType}
                onChange={handleChange('eventType')}
                sx={{
                  backgroundColor: 'rgba(253, 251, 240, 0.03)',
                  borderRadius: '10px',
                  color: '#FDFBF0',
                  fontSize: { xs: '0.82rem', sm: '0.88rem' },
                  width: '100%',
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                  '& .MuiSelect-select': {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    py: 1.6,
                    pr: '32px !important',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(253, 251, 240, 0.12)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 199, 0, 0.6)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FFC700',
                    borderWidth: '1.5px',
                  },
                }}
              >
                {EVENT_TYPES.map((type) => (
                  <MenuItem key={type} value={type} sx={{ fontSize: '0.85rem', whiteSpace: 'normal', wordBreak: 'break-word' }}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            {/* Event Date */}
            <Box sx={{ width: '100%', minWidth: 0, maxWidth: '100%', boxSizing: 'border-box' }}>
              <Typography
                component="label"
                sx={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#EDE7CB',
                  mb: 0.6,
                }}
              >
                Event Date <span style={{ color: '#FFC700' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                type="date"
                value={formData.eventDate}
                onChange={handleChange('eventDate')}
                error={Boolean(errors.eventDate)}
                helperText={errors.eventDate}
                sx={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
                slotProps={{
                  htmlInput: {
                    min: new Date().toISOString().split('T')[0],
                    style: {
                      colorScheme: 'dark',
                    },
                  },
                }}
              />
            </Box>

            {/* Venue / City */}
            <Box sx={{ width: '100%', minWidth: 0, maxWidth: '100%', boxSizing: 'border-box' }}>
              <Typography
                component="label"
                sx={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#EDE7CB',
                  mb: 0.6,
                }}
              >
                Venue / Location <span style={{ color: '#FFC700' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                value={formData.venue}
                onChange={handleChange('venue')}
                error={Boolean(errors.venue)}
                helperText={errors.venue}
                placeholder="e.g. Providence Waterfront, Boston, NYC"
                sx={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
              />
            </Box>

            {/* Estimated Attendance (Full width) */}
            <Box sx={{ gridColumn: { sm: '1 / -1' }, width: '100%', minWidth: 0, maxWidth: '100%', boxSizing: 'border-box' }}>
              <Typography
                component="label"
                sx={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#EDE7CB',
                  mb: 0.6,
                }}
              >
                Estimated Attendance / Crowd Size <span style={{ color: 'rgba(253, 251, 240, 0.5)', fontWeight: 600 }}>(Optional)</span>
              </Typography>
              <TextField
                fullWidth
                value={formData.guestCount}
                onChange={handleChange('guestCount')}
                placeholder="e.g. 250 - 500 Guests / 2,000+ Festival"
                sx={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
              />
            </Box>

            {/* Details (Full width) */}
            <Box sx={{ gridColumn: { sm: '1 / -1' }, width: '100%', minWidth: 0, maxWidth: '100%', boxSizing: 'border-box' }}>
              <Typography
                component="label"
                sx={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#EDE7CB',
                  mb: 0.6,
                }}
              >
                Event Details & Sound Requirements <span style={{ color: 'rgba(253, 251, 240, 0.5)', fontWeight: 600 }}>(Optional)</span>
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                value={formData.details}
                onChange={handleChange('details')}
                placeholder="Describe the vibe, set time (e.g. 10 PM - 2 AM), on-site sound/DJ gear, and specific musical requests (House, Latin, R&B, Open Format)..."
                sx={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
              />
            </Box>
          </Box>

          {/* Clean Single Action Submit Button */}
          <Box sx={{ pt: 1.8, borderTop: '1px solid rgba(253, 251, 240, 0.08)', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : null}
              endIcon={!isSubmitting ? <SendIcon sx={{ fontSize: 18 }} /> : null}
              sx={{
                py: { xs: 1.4, sm: 1.8 },
                px: { xs: 1.5, sm: 3 },
                fontWeight: 900,
                fontSize: { xs: '0.88rem', sm: '1rem' },
                letterSpacing: '0.03em',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
              }}
            >
              {isSubmitting ? 'Dispatching Inquiry...' : 'Send Booking Inquiry'}
            </Button>
            <Typography variant="caption" display="block" align="center" sx={{ color: 'rgba(253, 251, 240, 0.6)', mt: 1.2, fontSize: { xs: '0.68rem', sm: '0.72rem' } }}>
              Direct dispatch to <span style={{ color: '#FFC700' }}>gibran@me.com</span>
            </Typography>
          </Box>
        </Paper>
      </Container>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%', fontWeight: 700 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
